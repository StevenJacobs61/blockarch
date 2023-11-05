import '../../styles/projectQuestions.scss'
import {projectQuestions} from '../../data/projectQuestions'
import { useEffect, useState } from 'react'
import { add, updateById } from '../../functions/userAPI';
import { ReactComponent as Arrow } from '../../svg/arrow-back.svg';

const ProjectQuestions = ({setBlock, block}) => {

    function initializeUserProjectFields(questions) {
        return questions
          .filter((question) => question.endpoint === 'user-project')
          .reduce((obj, question) => {
            obj[question.field] = null;
            return obj;
          }, {});
      }
    
    const [qIndex, setQIndex] = useState(0);
    const [userProject, setUserProject] = useState(initializeUserProjectFields(projectQuestions));
    const [userProjectPurpose, setUserProjectPurpose] = useState({});
    const [purposeValue, setPurposeValue] = useState('');
    const [userProjectLanguages, setUserProjectLanguages] = useState({});
    const [languagesValue, setLanguagesValue] = useState('');
    const [userProjectIndustry, setUserProjectIndustry] = useState({});
    const [industryValue, setIndustryValue] = useState('');
    const [userProjectNetworkParticipants, setUserProjectNetworkParticipants] = useState({});
    const [networkValue, setNetworkValue] = useState('');
    const [user, setUser] = useState({});

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if(user){
            setUserProject((prev) => ({...prev, user:user}));
        }
    }, [])

    const handleIndex = (direction) =>{
        if(direction === 1){
            setQIndex((prev)=> prev === projectQuestions.length - 1 ? 0 : prev+1);
        }else if(direction === 0){
            setQIndex((prev)=> prev === 0 ? projectQuestions.length - 1 : prev-1);
        }
        setBlock(projectQuestions[qIndex].block);
    }
   
    const handleChecked = (e) => {
    const selectedValue = e.target.value;
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
            setUserProject((prev) => ({ ...prev, [projectQuestions[qIndex].field]: selectedValue }));
            break;
        default:
            break;
    }
};

    const handleSubmit = async () => {
        let userProjectId = null;
        
        try {
            const addRes = await add(userProject, '/user-project');
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

            const projectRes = await updateById(newData, '/user-project', userProjectId);
            console.log(projectRes.data);
        }catch(error){
            console.error(error)
        }
    }

    console.log('user-project: ', userProject);
    console.log('user-project-network-participants: ', userProjectNetworkParticipants);
    console.log('user-project-industry: ', userProjectIndustry);
    console.log('user-project-purpose: ', userProjectPurpose);
    console.log('user-project-langauges ', userProjectLanguages);

  return (
    <div className='questions_container'>
        <div className="questions_topContainer">
        <div className="questions_arrowContainer" onClick={()=>handleIndex(0)}>
        <Arrow width='100%' height='100%'/>
        </div>
        <h3 className='questions_back' onClick={()=>handleIndex(0)}>Back</h3>
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
                    const value = projectQuestions[qIndex].type === 'number' ? parseInt(e.target.value, 10) : e.target.value;
                    setUserProject((prev) => ({
                      ...prev,
                      [projectQuestions[qIndex].field]: value
                    }));
                  }}
                value={userProject[projectQuestions[qIndex].field] || ''}/>
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
            <div className="projectQuestions_container">
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
            </div>
        }
        <div className="questions_changeContainer">
            <button 
                className='questions_buttonChange' 
                onClick={()=>handleIndex(1)}>
                Next
            </button>

        </div>
        {Object.values(userProject).every(value => value !== null) &&
            <button 
                className='questions_buttonSubmit'
                onClick={()=>handleSubmit()}>
                Submit
            </button>
        }
        </div>
    </div>
  )
}

export default ProjectQuestions