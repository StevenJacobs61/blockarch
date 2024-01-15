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
   const [loading, setLoading] = useState(false);
   const [success, setSuccess] = useState(false);

   useEffect(() => {
    Object.values(loginDetails).every((value) => value) ?
        setActiveSubmit(true) : setActiveSubmit(false);
   }, [loginDetails])

   const handleSubmit = async () => {
    if(!activeSubmit) return;
    setLoading(true);
    try{
        const res = await getUserByEmail(loginDetails.emailAddress);
        if(loginDetails.password == res.password){
            await localStorage.setItem('user', JSON.stringify(res));
            await localStorage.setItem('block', JSON.stringify(1));
            await localStorage.setItem('qIndex', JSON.stringify(0));
            setSuccess(true);
            setLoading(false);
            setTimeout(()=>{
                navigate('/apps');
            }, 1500)

        }else{
            setAlertMessage('Password did not match. \n Please try again or create an account.')
        }
    }catch(err){
        console.error(err)
        setAlertMessage('Username or Password did not match. \n Please try again or create an account.');
    }
    setLoading(false);
   }

   const handleNewAcount = () => {
    localStorage.removeItem('user');
    navigate('/apps/questions')
   }

  return (
    <div className="questions_loginTitleContainer">
        <h1 className="questions_loginTitle">Login</h1>
    <div className='questions_loginContainer'>
        <h2 className='questions_loginHdr'>Confirm your<br/>Email & Password</h2>
        <h3 className='questions_alertMessage'>{alertMessage}</h3>
        <label className='questions_label'>Email Address</label>
        <input type="text" className='questions_textInput' 
            onChange={(e)=> setLoginDetails((prev)=> ({...prev, emailAddress: e.target.value}))}/>
        <label className='questions_label'>Password</label>
        <input type="password" className='questions_textInput'
            onChange={(e)=> setLoginDetails((prev)=> ({...prev, password: e.target.value}))}/>
           {!loading ? 
           <h3 className='questions_createAccount' onClick={()=>handleNewAcount()}>Don't have an account yet? Create one here!</h3>
           : <p className='questions_loading'>Please wait, your data is being retrieved...</p>
        }
        <div className='questions_btnContainer'>
        {success ? 
            <p className='questions_success'>Success!</p>
            : <button className='questions_buttonLogin'
            style={{
                opacity: activeSubmit && !loading ? '' : '0.3', 
                cursor: activeSubmit && !loading ? '' : 'unset',
                color: activeSubmit && !loading ? '' : '#FF06D7',
                background : activeSubmit && !loading ? '' : '#fff',
                pointerEvents: loading ? "none" : "auto"
            }}
            onClick={()=>handleSubmit()}>
            {loading ? 
             <div className="spinner"/>
            : "Submit"}
        </button>}
        </div>
    </div>
    </div>
  )
}

export default Login