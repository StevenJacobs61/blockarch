import { useEffect, useRef, useState } from 'react';
import '../../styles/userQuestions.scss'
import { add, getUserByEmail } from '../../functions/userAPI';
import { userQuestions } from '../../data/userQuestions';
import { ReactComponent as Arrow } from '../../svg/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

const UserQuestionsComp = ({setBlock, isHidden, setIsHidden, setAnswers, qIndex, setQIndex}) => {

    const navigate = useNavigate();
    
    const [buttonText, setButtonText] = useState('Submit');
    const [alertMessage, setAlertMessage] = useState(null);
    const other = useRef(null);
    const[showSubmit, setShowSubmit] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState();
    const [finish, setFinish] = useState(false)
    const [user, setUser] = useState(()=>{
      const result = {};
     userQuestions.forEach(question => {
      question.input.forEach(inputField => {
        if(inputField.field !== 'confirmPassword' && inputField.field !== 'finish'){
          result[inputField.field] = null
        }
      })
     })
     return result;
    });

    useEffect(()=>{
      JSON.parse(localStorage.getItem('user'));
      setAnswers(user)
    }, [user])

    useEffect(()=>{
      const localUser = JSON.parse(localStorage.getItem('user'));
      if(localUser){
        setUser(localUser);
      }else{
        localStorage.setItem('user', JSON.stringify(user));
      }
    }, [])

    const handleSubmit = async () => {
      setButtonText("Sending")
      let alert = false;
      try {
        const emailRes = await getUserByEmail(user.emailAddress);
        if(emailRes){
          setAlertMessage('Email Address alreasy in use.');
          setQIndex(0)
          alert = true;
        }
      } catch (error) {
        console.log(error.code);
        if(error.code == 500){
          setAlertMessage('Email Address alreasy in use.')
          alert = true;
        }
      }
      if(!alert){
      try {
          const response = await add(user, '/user')
          setButtonText('Success');
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('block', JSON.stringify(1));
          localStorage.setItem('qIndex', JSON.stringify(0));
          // setBlock(1)
          // setUser({});
          // setQIndex(0)
          window.location.reload();
      } catch (error) {
        setButtonText('Error')
      }
    }
    setButtonText('Submit')
    };
    
    useEffect(()=>{
      if(!Object.values(user).includes(value => value == null || value == "")){
        setShowSubmit(false);
      }else{
        setShowSubmit(true);
      }
    },[user])

    const handleIndex = (direction) => {
      if(finish){
        setFinish(false)
      }
      if(qIndex === 0 && direction === 1 && confirmPassword !== user.password){
        return setAlertMessage("Confirm password does not match!");
      }else{
        setAlertMessage(null)
      }
      if(Object.values(user).every(value => value !== null && value !== "")){
        setShowSubmit(true)
      }
        setIsHidden(true);
        localStorage.setItem('user', JSON.stringify(user))
        setAnswers(user);
        setTimeout(()=>{
          if(direction === 1){
            setQIndex((prev)=> prev === userQuestions.length - 1 ? 0 : prev+1);
          }else if(direction === 0){
            setQIndex((prev)=> prev === 0 ? userQuestions.length - 1 : prev-1);
          }
          setIsHidden(false)
        }, [200])
    }

    const handleClear = () => {
      other.current.value = '';
    }

  return (
    <div className={`userQuestions_container`}>
      <div className='questions_topContainer'>
        <div className="questions_arrowContainer" onClick={()=>handleIndex(0)}>
        <Arrow width='100%' height='100%'/>
        </div>
        {/* <h3 className='questions_back' onClick={()=>handleIndex(0)}>Back</h3> */}
      </div>
    <h1 className='userQuestions_hdr'>Create a user account</h1>
    {alertMessage ? <h3 className='questions_alertMessage'>{alertMessage}</h3> : null}

    <div className='userQuestions_questionsContainer' >
      {!finish ? 
      <>
      <h2 className='userQuestions_question'>{userQuestions[qIndex].title}</h2>
      <h3 className='userQuestions_subtext'>{userQuestions[qIndex].subtext}</h3>
      {qIndex === 3 ?
      <>
      <div className='userQuestions_inputContainer'>
      <label className='questions_label'>Personal</label>
      <input type='radio' className='questions_checkbox' value='Personal' 
        onChange={(e)=>setUser((prev)=> ({...prev, [userQuestions[qIndex].input[0].field]:e.target.value}))}
        checked={
          user.accountType === 'Personal'
        }/>
      </div>
      <div className='userQuestions_inputContainer'>
      <label className='questions_label'>Corporate</label>
      <input type='radio' className='questions_checkbox' value='Corporate' 
        onChange={(e)=>setUser((prev)=> ({...prev, [userQuestions[qIndex].input[0].field]:e.target.value}))}
        checked={
          user.accountType === 'Corporate'
        }/>
      </div>
      </>
      :
      qIndex === 4 ?
      <>
      <div className='userQuestions_inputContainer'>
      <label className='questions_label'>Developer</label>
      <input type='radio' className='questions_checkbox' value='Developer' 
        onChange={(e)=>setUser((prev)=> ({...prev, [userQuestions[qIndex].input[0].field]:e.target.value}))}
        checked={
          user[userQuestions[qIndex].input[0].field] === 'Developer'
        }/>
      </div>
      <div className='userQuestions_inputContainer'>
      <label className='questions_label'>Tech Lead</label>
      <input type='radio' className='questions_checkbox' value='Tech Lead' 
        onChange={(e)=>setUser((prev)=> ({...prev, [userQuestions[qIndex].input[0].field]:e.target.value}), handleClear())}
        checked={
          user[userQuestions[qIndex].input[0].field] === 'Tech Lead'
        }/>
      </div>
      <div className='userQuestions_inputContainer'>
      <label className='questions_label'>CEO</label>
      <input type='radio' className='questions_checkbox' value='CEO' 
        onChange={(e)=>setUser((prev)=> ({...prev, [userQuestions[qIndex].input[0].field]:e.target.value}), handleClear())}
        checked={
          user[userQuestions[qIndex].input[0].field] === 'CEO'
        }/>
      </div>
      <div className='userQuestions_inputContainer'>
      <label className='questions_label'>CTO</label>
      <input type='radio' className='questions_checkbox' value='CTO' 
        onChange={(e)=>setUser((prev)=> ({...prev, [userQuestions[qIndex].input[0].field]:e.target.value}), handleClear())}
        checked={
          user[userQuestions[qIndex].input[0].field] === 'CTO'
        }/>
      </div>
      <div className='userQuestions_inputContainer'>
      <label className='questions_label'>Other? please specify!</label>
      <input type='text' className='questions_textInput' ref={other} 
        onChange={(e) => {
          const inputValue = e.target.value;
          const maxLength = 50;
          if (inputValue.length <= maxLength) {
            setUser((prev) => ({
              ...prev,
              [userQuestions[qIndex].input[0].field]: inputValue,
            }));
          }
        }}
      />
      </div>
      </>
       : userQuestions[qIndex].title !== 'Submit your answers' ?
      userQuestions[qIndex].input.map((input, i) => 

      <div className='userQuestions_inputContainer' key={i}>
      <label className='questions_label'>{input.title}</label>
      {input.field === 'confirmPassword' ? 
       <input 
        type={input.type} 
        className='questions_textInput' 
        onChange={(e)=> setConfirmPassword(e.target.value)}
      /> : 
      <input type={input.type} className='questions_textInput' value={user[input.field] || ''} onChange={(e)=> setUser((prev) => ({...prev, [input.field]:e.target.value}))}/>
    }
      </div>
      ) : null
      }
      {qIndex === 0 ?
      <p className='userQuestions_login' onClick={()=> navigate('/apps/questions/login')}>Already have an account?<br/> Login here!</p>
    : null}
    </>: 
    <h1>finish</h1>
    }
    </div>
      {showSubmit &&
          <button 
              className='questions_buttonSubmit'
              onClick={()=>handleSubmit()}>
              {buttonText}
          </button>
      }
    <div className="questions_changeContainer">
            <button 
                className='questions_buttonChange' 
                onClick={()=>handleIndex(1)}>
                  Next
            </button>

        </div>
  </div>
  )
}

export default UserQuestionsComp