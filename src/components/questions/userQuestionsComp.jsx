import { useEffect, useRef, useState } from 'react';
import '../../styles/userQuestions.scss'
import { add, getUserByEmail } from '../../functions/userAPI';
import { userQuestions } from '../../data/userQuestions';
import { ReactComponent as Arrow } from '../../svg/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

const UserQuestionsComp = ({setIsHidden, qIndex, setQIndex, alertMessage, setAlertMessage}) => {

    const navigate = useNavigate();
    
    const other = useRef(null);
    const [finish, setFinish] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState(()=>{
      const result = {};
     userQuestions.forEach(question => {
      question.input.forEach(inputField => {
        if(inputField.field !== 'finish'){
          result[inputField.field] = null
        }
      })
     })
     return result;
    });

    useEffect(()=>{
      const localUser = JSON.parse(localStorage.getItem('user'));
      if(localUser){
        setUser(localUser);
      }else{
        localStorage.setItem('user', JSON.stringify(user));
      }
    }, [])

    const handleSubmit = async () => {
      if(user.confirmPassword !== user.password){
        setAlertMessage("Confirm password does not match!");
        setQIndex(0);
        return
      }
      if(qIndex !== userQuestions.length - 1){
        setQIndex(userQuestions.length - 1);
        localStorage.setItem("user", JSON.stringify(user))
        return
      }
      setLoading(true);
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
        const {confirmPassword, ...otherUserProperties} = user;
          const response = await add(otherUserProperties, '/user')
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('block', JSON.stringify(1));
          localStorage.setItem('qIndex', JSON.stringify(0));
          setSuccess(true);
          setTimeout(()=>{}, 2000);
          window.location.reload();
      } catch (error) {
        console.error(error);
      }
    }
    };

    const handleIndex = (direction) => {
      if(finish){
        setFinish(false)
      }
      if(qIndex === 0 && direction === 1 && user.confirmPassword !== user.password){
        return setAlertMessage("Confirm password does not match!");
      }else{
        setAlertMessage("");
      }
        setIsHidden(true);
        localStorage.setItem('user', JSON.stringify(user))
        setTimeout(()=>{
          if(direction === 1){
            setQIndex((prev)=> prev === userQuestions.length - 1 ? 0 : prev+1);
          }else if(direction === 0){
            setQIndex((prev)=> prev === 0 ? userQuestions.length - 1 : prev-1);
          }
          setIsHidden(false)
        }, [200])
        localStorage.setItem('qIndex', JSON.stringify(qIndex));
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
      <input 
      type={input.type}
      className='questions_textInput' 
      value={user[input.field] || ''} 
      onChange={(e)=> {
        const newValue = e.target.value;
        if (((newValue === '' || /^\+?\d*$/.test(newValue)) && qIndex === 2) || qIndex !== 2) {
          const value = input.type === 'number' ? parseInt(newValue) : newValue;
          setUser((prev) => ({ ...prev, [input.field]: value }));
          let newUser = {...user, [input.field]: value}
          localStorage.setItem("user", JSON.stringify(newUser));
        }
      }}/>
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
    {loading && !success ? <p className='questions_loading'>Your Account is being created, do not leave the page...</p> : null}
    { !Object.values(user).some((val) => val === null || val === undefined || val == NaN || val === "" || val.toString().trim() === "")
            ?
                !success ? <button 
                    className='questions_buttonSubmit'
                    onClick={()=>handleSubmit()}
                    style={{opacity: loading ? "0.4" : "", pointerEvents: loading ? "none" : "auto"}}
                    >
                    {qIndex !== userQuestions.length - 1 && !loading ? "Finish" : qIndex == userQuestions.length - 1 && !loading ? "Submit" : 
                        <div className="spinner"/>
                    }
                </button> : <p className='questions_success'>Success!</p>
           : null } 
    <div className="questions_changeContainer">
            {qIndex !== userQuestions.length - 1 ?
            <button 
                className='questions_buttonChange' 
                onClick={()=>handleIndex(1)}>
                  Next
            </button>
            :null
            }
        </div>
  </div>
  )
}

export default UserQuestionsComp