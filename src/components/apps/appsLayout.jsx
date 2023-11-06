import { useState } from 'react'
import AppsBar from '../apps/appsBar'
import { Outlet, useNavigate } from 'react-router-dom'

const AppsLayout = () => {

  const navigate = useNavigate();
  const [hide, setHide] = useState(true);

  return (
    <div className='appsLayout_container'>
      <div className="appsLayout_sideBar" style={{transform: hide ? "translateX(-100%)" : "", opacity: hide ? '0' : '1'}}>
        <h1 className='appsLayout_title'>Profile</h1>
        <h1 className='appsLayout_title'>Logout</h1>
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