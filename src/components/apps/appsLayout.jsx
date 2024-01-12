import { useEffect, useState } from 'react'
import AppsBar from '../apps/appsBar'
import { Outlet, useNavigate } from 'react-router-dom'
import { clearLocalData, handleAddProject, naviagteToResult } from '../../functions/utility';
import { useProjects } from '../../hooks/useUserProjects';
import '../../styles/appsLayout.scss'
import { userQuestions } from '../../data/userQuestions';

const AppsLayout = () => {

  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const { userProjects } = useProjects();
  const [showProjects, setShowProjects] = useState(false);
  const [user, setUser] = useState(()=>
    !JSON.parse(localStorage.getItem('user')) 
    ? nullUserFields() : JSON.parse(localStorage.getItem('user'))
    );
  
  function nullUserFields(){
    const result = {};
   userQuestions.forEach(question => {
    question.input.forEach(inputField => {
      if(inputField.field !== 'confirmPassword' && inputField.field !== 'finish'){
        result[inputField.field] = null
      }
    })
   })
   return result;
  }

  useEffect(()=>{
    const localUser = JSON.parse(localStorage.getItem('user'));
    if(localUser){
      setUser(localUser);
    }else{
      localStorage.setItem('user', JSON.stringify(nullUserFields()));
    }
  }, [window.location.pathname])

/* eslint-disable no-restricted-globals */
  const handleLogout = () => {
    if (confirm('Are you sure you wish to logout?')) {
        clearLocalData();
        navigate('/');
        window.scrollTo({top:0, behavior: "smooth"});
    }
}

/* eslint-enable no-restricted-globals */

const addProject = () => {
  handleAddProject();
  setHide(true);
}

const handleNavigateToResult = async (project) => {
  const res = await naviagteToResult(project);
  if(res) setHide(true);
  window.scrollTo({top:0, behavior: "smooth"});
}

const handleShow = () => {
  setShowProjects(!showProjects)
}

  return (
    <div className='appsLayout_container'>
      {user ? 
      <div className="appsLayout_sideBar" style={{transform: hide ? "translateX(-100%)" : "", opacity: hide ? '0' : '1'}}>
          <div className="appsLayout_titlesContainer">
            <h2 className='appsLayout_title' onClick={()=>navigate('/apps') + setHide(true) + window.scrollTo({top:0, behavior: "smooth"})}>Profile</h2>
            <h2 className='appsLayout_title' onClick={()=>handleLogout()}>Logout</h2>
            <h2 className='appsLayout_title' onClick={()=>addProject()}>New</h2>
            <h2 
              className='appsLayout_title' 
              onClick={()=>handleShow()}
              style={{background: showProjects ? '#FF06D7' : "", color: showProjects ? '#fff' : ""}}
              >Projects</h2>
          </div>
          {showProjects &&
        <div className="appsLayout_sideBarMatches">
          {userProjects?.map((project, i) => 
          <h2 className='appsLayout_matchTitle' key={i}
          onClick={()=>handleNavigateToResult(project)}>
            {project.projectName}
          </h2>
          )}
        </div>
          }
      </div>
      : null
      }
        <AppsBar setHide={setHide} hide={hide} user={user}/>
      <main className="apps_layoutContainer">
        <Outlet/>
      </main>
    </div>
  )
}

export default AppsLayout