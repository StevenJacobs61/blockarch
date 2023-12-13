import { useEffect, useState } from 'react'
import AppsBar from '../apps/appsBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { clearLocalData } from '../../functions/utility';

const AppsLayout = () => {

  const navigate = useNavigate();
  const [hide, setHide] = useState(true);


/* eslint-disable no-restricted-globals */
  const handleLogout = () => {
    console.log("Before confirm");
    if (confirm('Are you sure you wish to logout?')) {
        clearLocalData();
        navigate('/');
    }
}

/* eslint-enable no-restricted-globals */

const handleAddProject = () => {
  localStorage.setItem('block', JSON.stringify(1))
  navigate('/questions');

}

useEffect(()=>{
  if(!localStorage.getItem('user')){
    navigate('/questions/login')
  }
},[window.pathname])

  return (
    <div className='appsLayout_container'>
      <div className="appsLayout_sideBar" style={{transform: hide ? "translateX(-100%)" : "", opacity: hide ? '0' : '1'}}>
        <h2 className='appsLayout_title' onClick={()=>navigate('/apps') + setHide(true)}>Profile</h2>
        <h2 className='appsLayout_title' onClick={()=>handleLogout()}>Logout</h2>
        <h2 className='appsLayout_title' onClick={()=>handleAddProject()}>Add Project</h2>
        <div className="appsLayout_sideBarMatches">
          <h2 className='appsLayout_matchTitle'
          onClick={()=>navigate('/apps/result') + setHide(true)}
          >Match 1</h2>
          <h2 className='appsLayout_matchTitle'
          onClick={()=>navigate('/apps/result') + setHide(true)}
          >Match 2</h2>
          <h2 className='appsLayout_matchTitle'
          onClick={()=>navigate('/apps/result') + setHide(true)}
          >Match 3</h2>
        </div>
      </div>
      <AppsBar setHide={setHide}/>
      <main className="layout_container">
        <Outlet/>
      </main>
    </div>
  )
}

export default AppsLayout