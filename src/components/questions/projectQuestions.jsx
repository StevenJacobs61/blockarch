import '../../styles/projectQuestions.scss'
import {projectQuestions} from '../../data/projectQuestions'
import { useState } from 'react'
import { add, getById } from '../../functions/userAPI';
import axios from 'axios';

const ProjectQuestions = ({setBlock, block}) => {

    const [qIndex, setQIndex] = useState(0);
    const endpoint = projectQuestions[qIndex].endpoint;
    function initializeUserProjectFields(questions) {
        return questions
          .filter((question) => question.endpoint === 'user-project')
          .reduce((obj, question) => {
            obj[question.field] = null;
            return obj;
          }, {});
      }
    const [userProject, setUserProject] = useState(initializeUserProjectFields(projectQuestions))
    const [dltSolutionPurpose, setDltSolutionPurpose] = useState({});
    const [dltValue, setDltValue] = useState('')
    const [userProjectLanguages, setUserProjectLanguages] = useState({});
    const [languagesValue, setLanguagesValue] = useState('')
    const [userProjectIndustry, setUserProjectIndustry] = useState({});
    const [industryValue, setIndustryValue] = useState('')
    const [userProjectNetworkParticipants, setUserProjectNetworkParticipants] = useState({});
    const [networkValue, setNetworkValue] = useState('')


    // This function is not saving the value as a boolean for true and I have no idea why!!!! grrr
    const handleUserProject = (e) => {
        e.preventDefault()
        if(e.target.value === 'true'){
            setUserProject((prev) => ({...prev, [projectQuestions[qIndex].field]: true}))
        } else if (e.target.value === 'false'){
            setUserProject((prev) => ({...prev, [projectQuestions[qIndex].field]: false}))
        } else{
            setUserProject((prev) => ({...prev, [projectQuestions[qIndex].field]: e.target.value}))
        }
    }

    const handleChecked = (e) => {
        const selectedValue = e.target.value;
        const answersArray = projectQuestions[qIndex].answers;
        const result = answersArray.reduce((obj, value) => {
          obj[value] = false;
          return obj;
        }, {});
        
        result[selectedValue] = true;
        
         if(endpoint === 'user-project-network-participants'){
            setUserProjectNetworkParticipants(result);
            setNetworkValue(selectedValue);          
         };
         if(endpoint === 'user-project-industry'){
            setUserProjectIndustry(result);
            setIndustryValue(selectedValue);
         };
         if(endpoint === 'dlt-solution-purpose'){
            setDltSolutionPurpose(result);
            setDltValue(selectedValue);
         };
         if(endpoint === 'user-project-languages'){
            setUserProjectLanguages(result);
            setLanguagesValue(selectedValue);
         };
         if(endpoint === 'user-project'){
            setUserProject((prev)=> ({...prev, [projectQuestions[qIndex].field]:e.target.value}))
         }
    }
    const isChecked = (ans) => {
        const endpoint = projectQuestions[qIndex].endpoint;
        if(endpoint === 'user-project-network-participants'){
            if(userProjectNetworkParticipants[ans] === true){
                return true
            } else {
                return false
            }
        }
        if(endpoint === 'user-project-languages'){
            if(userProjectLanguages[ans] === true){
                return true
            } else {
                return false
            }
        }
        if(endpoint === 'user-project-industry'){
            if(userProjectIndustry[ans] === true){
                return true
            } else {
                return false
            }
        }
    }
    const handleGet = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user-project`)
            console.log(response.data);
        } catch (error) {
            console.error(error)
        }
    }

    const handleSumbit = async () => {
        // const user = JSON.parse(localStorage.getItem('user'));
        // const userProjectPlusId = {
        //     ...userProject,
        //     user_id: user.id
        // } 
        // const data = {
        //     id: 3,
        //     version: null,
        //     project_name: null,
        //     outsourced_build: null,
        //     budget_currency: null,
        //     budget_amount: null,
        //     generalist_specialist: null,
        //     transactions_per_month: null,
        //     transactions_per_second: null,
        //     transaction_size: null,
        //     invite_only_access: null,
        //     identity_mandatory: null,
        //     solution_controller_participant_view: null,
        //     operate_in_regulatory_environment: null,
        //     meet_legal_requirements: null,
        //     require_physical_devices: null,
        //     esg_relevant: null,
        //     // user_id: 1,
        //     industry_usage: null,
        //     network_participants: null,
        //     development_languages: null
        //   }
        
        
        try{
            // const userRes = await getById(2, '/user');
            // const data = {
            //     // "id": 1,
            //     "version": 2,
            //     "projectName": "Project Test2",
            //     "outsourcedBuild": true,
            //     "budgetCurrency": "USD",
            //     "budgetAmount": 100000,
            //     "transactionsPerMonth": 100,
            //     "transactionsPerSecond": 10,
            //     "transactionSize": 1024,
            //     "inviteOnlyAccess": true,
            //     "identityMandatory": false,
            //     "solutionControllerParticipantView": true,
            //     "operateInRegulatoryEnvironment": true,
            //     "meetLegalRequirements": false,
            //     "requirePhysicalDevices": true,
            //     "user": null,
            //     "industryUsage": null,
            //     "networkParticipants": null,
            //     "developmentLanguages": null,
            //     "purpose" : null
            // }
            const addRes = await add(userProject, '/user-project');
            localStorage.setItem('block', projectQuestions[qIndex].block);
            console.log(localStorage.getItem('block'));
            console.log(addRes);
        }catch(error){
            console.error(error)
        }
    }
    console.log('user-project: ', userProject);
    // console.log('user-project-network-participants: ', userProjectNetworkParticipants);
    // console.log('user-project-industry: ', userProjectIndustry);
    // console.log('dlt-solution-purpose: ', dltSolutionPurpose);
    // console.log('user-project-langauges ', userProjectLanguages);
    // console.log(userProject[projectQuestions[qIndex].field]);

    const handleIndex = () =>{
        setQIndex((prev)=> prev === projectQuestions.length - 1 ? 0 : prev+1);
        setBlock(projectQuestions[qIndex].block);
        console.log(projectQuestions[qIndex].block);
        console.log(projectQuestions[qIndex]);
        // console.log(block);
    }

  return (
    <div className='projectQuestions_container'>
        <h1 className='projectQuestions_hdr'>Project Questions</h1>
        <div className='projectQuestions_questionsContainer'>
            <h2 className='projectQuestions_questionsTitle'>
                {projectQuestions[qIndex].title}
            </h2>
            {projectQuestions[qIndex].type === 'text' ? 
            <input 
                type='text' 
                onChange={(e)=>handleUserProject(e)}
                value={userProject[projectQuestions[qIndex].field] || ''}/>
            : projectQuestions[qIndex].type === 'radio' ? projectQuestions[qIndex].answers.map((ans, i) => 
            <div className='projectQuestions_inputContainer' key={i}>
            <label className='projectQuestions_label'>{ans}
            </label>
            <input 
                type='radio' 
                name={`answer-${qIndex}`} 
                className='projectQuestions_checkbox' 
                value={ans} 
                onChange={(e)=>handleChecked(e)}
                checked={
                    endpoint === 'user-project-network-participants' ? ans === networkValue :
                    endpoint === 'user-project-industry' ? ans === industryValue :
                    endpoint === 'dlt-solution-purpose' ? ans === dltValue :
                    endpoint === 'user-project' ? userProject[projectQuestions[qIndex].field] === ans :
                    false
                }/>
            </div>) 
            : 
            <div className="projectQuestions_container">
                <label>Yes</label>
                <input 
                    type='radio'
                    name={`answer-${qIndex}`}
                    className='projectQuestions_checkbox'
                    value={true}
                    onChange={(e)=>handleChecked(e)}
                    checked={userProject[projectQuestions[qIndex].field] === 'true'}/>
                <label>No</label>
                <input 
                    type='radio'
                    name={`answer-${qIndex}`}
                    className='projectQuestions_checkbox'
                    value={false}
                    onChange={(e)=>handleUserProject(e)}
                    checked={userProject[projectQuestions[qIndex].field] === false}/>
            </div>
        }
            <button 
                className='projectQuestions_button' 
                onClick={()=>handleIndex()}
                >Next</button>
            <button 
                className='projectQuestions_button'
                onClick={()=>handleSumbit()}
                // onClick={()=>handleGet()}
                >Submit</button>
        </div>
    </div>
  )
}

export default ProjectQuestions