import '../../styles/projectQuestions.scss'
import {projectQuestions} from '../../data/projectQuestions'
import { useEffect, useState } from 'react'
import { add, getById, getUserByEmail, updateById } from '../../functions/userAPI';
import { ReactComponent as Arrow } from '../../svg/arrow-back.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { calculateAndSortResults } from '../../functions/utility';
import { getGptSummary } from '../../functions/gpt';

const ProjectQuestions = ({setBlock, qIndex, setQIndex}) => {

    function initializeUserProjectFields(questions) {
        return questions
          .filter((question) => question.endpoint === 'user-project')
          .reduce((obj, question) => {
            obj[question.field] = null;
            return obj;
          }, {});
      }
    const [userProject, setUserProject] = useState(initializeUserProjectFields(projectQuestions));
    const [userProjectPurpose, setUserProjectPurpose] = useState({});
    const [purposeValue, setPurposeValue] = useState('');
    const [userProjectLanguages, setUserProjectLanguages] = useState({});
    const [languagesValue, setLanguagesValue] = useState('');
    const [userProjectIndustry, setUserProjectIndustry] = useState({});
    const [industryValue, setIndustryValue] = useState('');
    const [userProjectNetworkParticipants, setUserProjectNetworkParticipants] = useState({});
    const [networkValue, setNetworkValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const findValue = (obj) => {
        const selectedValue = Object.keys(obj).find((key) => obj[key])
        return selectedValue;
    }

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            setUserProject((prev) => ({...prev, user:user}));
        }
        if(!localStorage.getItem('project')){
            localStorage.setItem('project', JSON.stringify({...userProject, userProjectIndustry, userProjectLanguages, userProjectNetworkParticipants, userProjectPurpose}))
        }else{
            const project = JSON.parse(localStorage.getItem('project'));
            setUserProjectIndustry({...project.userProjectIndustry});
            setIndustryValue(findValue({...project.userProjectIndustry}))
            setUserProjectLanguages({...project.userProjectLanguages});
            setLanguagesValue(findValue({...project.userProjectLanguages}))
            setUserProjectNetworkParticipants({...project.userProjectNetworkParticipants});
            setNetworkValue(findValue({...project.userProjectNetworkParticipants}))
            setUserProjectPurpose({...project.userProjectPurpose});
            setPurposeValue(findValue({...project.userProjectPurpose}))
            delete project.userProjectIndustry;
            delete project.userProjectLanguages;
            delete project.userProjectNetworkParticipants;
            delete project.userProjectPurpose;
            setUserProject({...project});
        }
        if(!localStorage.getItem('qIndex')){
            localStorage.setItem('qIndex', qIndex);
        }else{
            setQIndex(parseInt(localStorage.getItem('qIndex')))
        }
    }, [])

    const handleIndex = (direction) =>{
        localStorage.setItem('project', JSON.stringify({...userProject, userProjectIndustry, userProjectLanguages, userProjectNetworkParticipants, userProjectPurpose}))
        let newIndex = null;
        if(direction === 1){
            newIndex = qIndex === projectQuestions.length - 1 ? 0 : qIndex + 1;
            localStorage.setItem('qIndex', JSON.stringify(newIndex));
            setQIndex(newIndex);
        }else if(direction === 0){
            newIndex = qIndex ===  0 ? projectQuestions.length - 1 : qIndex - 1;
            localStorage.setItem('qIndex', JSON.stringify(newIndex));
            setQIndex(newIndex);
        }
        setBlock(projectQuestions[newIndex].block);
        localStorage.setItem('block', JSON.stringify(projectQuestions[newIndex].block))
    }

    const handleChecked = (e) => {
    let selectedValue = e.target.value;
    const answersArray = projectQuestions[qIndex].entries;
    const result = answersArray.reduce((obj, value) => {
        obj[value] = false;
        return obj;
    }, {});
    result[selectedValue] = true;

    switch (projectQuestions[qIndex].endpoint) {
        case 'user-project-network-participants':
            setUserProjectNetworkParticipants(result);
            setNetworkValue(selectedValue);
            break;
        case 'user-project-industry':
            setUserProjectIndustry(result);
            setIndustryValue(selectedValue);
            break;
        case 'user-project-purpose':
            setUserProjectPurpose(result);
            setPurposeValue(selectedValue);
            break;
        case 'user-project-languages':
            setUserProjectLanguages(result);
            setLanguagesValue(selectedValue);
            break;
        case 'user-project':
            if(["transactionSize", "transactionsPerSecond", "transactionsPerMonth", "budgetAmount"].includes(projectQuestions[qIndex].field)){
                selectedValue = parseInt(selectedValue);
            }
            setUserProject((prev) => ({ ...prev, [projectQuestions[qIndex].field]: selectedValue }));
            break;
        default:
            break;
    }
};

    const handleSubmit = async () => {
        if(qIndex !== projectQuestions.length -1){
            return setQIndex(projectQuestions.length - 1)
        }
        setLoading(true)
     
        let userProjectId = null;
        let newProject = null;
        try {
            const userRes = await getUserByEmail(JSON.parse(localStorage.getItem('user')).emailAddress);
            let project = userProject;
            project.user = userRes;
            const addRes = await add(project, '/user-project');
            newProject = addRes.data;
            userProjectId = addRes.data.id;
        } catch (error) {
            console.error(error)
        }
        try{
            const languageRes = await add({...userProjectLanguages, userProjectId}, '/user-project-languages');
            const industryRes = await add({...userProjectIndustry, userProjectId}, '/user-project-industry');
            const participantsRes = await add({...userProjectNetworkParticipants, userProjectId}, '/user-project-network-participants');
            const purposeRes = await add({...userProjectPurpose, userProjectId}, '/user-project-purpose');
            let newData = {
                developmentLanguages: languageRes.data,
                industryUsage: industryRes.data,
                networkParticipants:participantsRes.data,
                purpose: purposeRes.data
            }
            const projectRes = await updateById({...newProject, ...newData}, '/user-project', userProjectId);
            const calcRes = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/project-blockchain-result`, projectRes.data);
            const resultsRes = await getById(projectRes.data.id, '/project-blockchain-result');
            const sortedResults = calculateAndSortResults(resultsRes);
            let gptRes = await getGptSummary(sortedResults);
            const finalProjectRes = await updateById({...projectRes.data, summary: gptRes}, '/user-project', userProjectId);
            localStorage.setItem('project', JSON.stringify(finalProjectRes.data)); 
            localStorage.setItem('results', JSON.stringify(resultsRes)); 
            localStorage.setItem('block', 1);
            localStorage.removeItem('qIndex');
            setSuccess(true);
            setTimeout(() => {
            navigate('/apps/result');
        }, 2000)
        }catch(error){
            console.error(error)

        }
    }

    useEffect(()=>{
        localStorage.setItem('project', JSON.stringify({...userProject, userProjectIndustry, userProjectLanguages, userProjectNetworkParticipants, userProjectPurpose}))
    }, [qIndex]);

  return (
    <div className='projectQuestions_container'>
        <div className="questions_topContainer">
        <div className="questions_arrowContainer" onClick={()=>handleIndex(0)}>
        <Arrow width='100%' height='100%'/>
        </div>
      </div>
        <h1 className='questions_hdr'>{projectQuestions[qIndex].title}</h1>
        <div className='projectQuestions_questionsContainer'>
            {projectQuestions[qIndex].subtext ?
            <h2 className='questions_questionsTitle'>
                {projectQuestions[qIndex].subtext}
            </h2>
            : null
            }
            {projectQuestions[qIndex].type === 'text' || projectQuestions[qIndex].type === 'number' ? 
            <input 
                type={projectQuestions[qIndex].type} 
                className='questions_textInput'
                onChange={(e) => {
                    const value = projectQuestions[qIndex].type === 'number' ? parseFloat(e.target.value) : e.target.value;
                    setUserProject((prev) => ({
                      ...prev,
                      [projectQuestions[qIndex].field]: value == null ? null : value
                    }));
                  }}
                  value={userProject[projectQuestions[qIndex].field] === null || userProject[projectQuestions[qIndex].field] === undefined ? '' : userProject[projectQuestions[qIndex].field]}/>
            : projectQuestions[qIndex].type === 'radio' ? projectQuestions[qIndex].answers.map((ans, i) => {
                let val = projectQuestions[qIndex].entries[i];
            
    return <div className='projectQuestions_inputContainer' key={i}>
            <label className='questions_label' htmlFor={`answer-${qIndex}`}>{ans}
            </label>
            <input 
                type='radio' 
                name={`answer-${qIndex}`} 
                className='questions_checkbox' 
                value={val} 
                onChange={(e)=> handleChecked(e)}
                checked={
                    projectQuestions[qIndex].endpoint === 'user-project-network-participants' ? val === networkValue :
                    projectQuestions[qIndex].endpoint === 'user-project-industry' ? val === industryValue :
                    projectQuestions[qIndex].endpoint === 'user-project-purpose' ? val === purposeValue :
                    projectQuestions[qIndex].endpoint === 'user-project-languages' ? val === languagesValue :
                    projectQuestions[qIndex].endpoint === 'user-project' ? userProject[projectQuestions[qIndex].field] === val :
                    false
                }/>
            </div>}) 
            : 
           ( projectQuestions[qIndex].field !== 'finish' && <div className="projectQuestions_container">
                <label className='questions_label'>Yes</label>
                <input 
                    type='radio'
                    name={`answer-${qIndex}`}
                    className='questions_checkbox'
                    value={true}
                    onChange={()=>setUserProject((prev) => ({ ...prev, [projectQuestions[qIndex].field]: true }))}
                    checked={userProject[projectQuestions[qIndex].field] === true ? true : false}/>
                <label className='questions_label'>No</label>
                <input 
                    type='radio'
                    name={`answer-${qIndex}`}
                    className='questions_checkbox'
                    value={false}
                    onChange={()=>setUserProject((prev) => ({ ...prev, [projectQuestions[qIndex].field]: false }))}
                    checked={userProject[projectQuestions[qIndex].field] === false ? true : false}/>
            </div>)
        }
            { !Object.values(userProject).some((val) => val === null || val === undefined || val == NaN || val === "" || val.toString().trim() === "")
            ?
                !success ? <button 
                    className='questions_buttonSubmit'
                    onClick={()=>handleSubmit()}
                    style={{opacity: loading ? "0.4" : "", pointerEvents: loading ? "none" : "auto"}}
                    >
                    {qIndex !== projectQuestions.length - 1 && !loading ? "Finish" : qIndex == projectQuestions.length - 1 && !loading ? "Submit" : 
                        <div className="spinner"/>
                    }
                </button> : <p className='questions_success'>Success!</p>
           :null } 
        <div className="questions_changeContainer">
        {qIndex !== projectQuestions.length - 1 && qIndex !== projectQuestions.length - 2 ?
            <button 
                className='questions_buttonChange' 
                onClick={()=>handleIndex(1)}>
                Next
            </button>
        :null}
        </div>
        </div>
    </div>
  )
}

export default ProjectQuestions