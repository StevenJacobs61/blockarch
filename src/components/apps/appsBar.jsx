import { useNavigate } from 'react-router-dom'
import '../../styles/appsLayout.scss'
import { ReactComponent as Logo } from '../../svg/logo-with-name.svg'

const AppsBar = ({setHide}) => {

  const navigate = useNavigate();

  const handleHome = () => {
    // if(confirm("Are you sure wish to logout?")){}
    navigate('/apps')
  }


  return (
    <div className='questionsBar_container'>
      <div className='appsBar_wrapper'>
      <div className="appsBar_sideContainer">
        <h1 className='appsBar_hdr' onClick={()=>setHide((prev) => !prev)}>Apps</h1>
      </div>
      <div className="appsBar_centralContainer">
        <div className="questionsBar_logoContainer">
          <Logo width={'100%'} height={'100%'} 
          onClick={()=>handleHome()}
          />
        </div>
      </div>
      <div className="appsBar_sideContainer">

      </div>
      </div>
    </div>
  )
}

export default AppsBar