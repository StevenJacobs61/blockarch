import React, { useEffect, useState } from 'react'
import { getUserByEmail } from '../../functions/userAPI'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const [loginDetails, setLoginDetails] = useState({
        emailAddress: null,
        password: null
    })
   const [activeSubmit, setActiveSubmit] = useState(false)
   const [alertMessage, setAlertMessage] = useState('');

   useEffect(() => {
    Object.values(loginDetails).every((value) => value) ?
        setActiveSubmit(true) : setActiveSubmit(false);
   }, [loginDetails])

   const handleSubmit = async () => {
    if(!activeSubmit) return;
    try{
        const res = await getUserByEmail(loginDetails.emailAddress);
        if(loginDetails.password == res.password){
            localStorage.setItem('user', JSON.stringify(res))
            navigate('/apps')
        }else{
            setAlertMessage('Password did not match. \n Please try again or create an account.')
        }
    }catch(err){
        console.error(err)
        setAlertMessage('Username or Password did not match. \n Please try again or create an account.')
    }
   }

   const handleNewAcount = () => {
    localStorage.setItem('user', JSON.stringify({}));
    navigate('/questions')
   }

  return (
    <div className="questions_loginTitleContainer">
        <h1 className="questions_loginTitle">Login</h1>
    <div className='questions_questionsContainer'>
        <h2 className='questions_loginHdr'>Confirm your<br/>Email & Password</h2>
        <h3 className='questions_alertMessage'>{alertMessage}</h3>
        <label className='questions_label'>Email Address</label>
        <input type="text" className='questions_textInput' 
        onChange={(e)=> setLoginDetails((prev)=> ({...prev, emailAddress: e.target.value}))}/>
        <label className='questions_label'>Password</label>
        <input type="password" className='questions_textInput'
        onChange={(e)=> setLoginDetails((prev)=> ({...prev, password: e.target.value}))}/>
           <h3 className='questions_createAccount' onClick={()=>handleNewAcount()}>Don't have an account yet? Create one here!</h3>
        <div className='questions_btnContainer'>
        <button className='questions_buttonLogin'
        style={{
            opacity: activeSubmit ? '' : '0.3', 
            cursor: activeSubmit ? '' : 'unset',
            color: activeSubmit ? '' : '#FF06D7',
            background : activeSubmit ? '' : '#fff'
         }}
         onClick={()=>handleSubmit()}
        >Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Login