import { useNavigate } from 'react-router-dom'
import '../../styles/appsLayout.scss'
import { ReactComponent as Logo } from '../../svg/logo-with-name.svg'
import { clearLocalData, resetLocalProject } from '../../functions/utility';
import { ReactComponent as Menu} from '../../svg/menu.svg'
import { ReactComponent as Cross} from '../../svg/cross.svg'

const AppsBar = ({setHide, hide, user}) => {
  const navigate = useNavigate();

  /* eslint-disable no-restricted-globals */
  function redirectToApps(){
    resetLocalProject();
    setHide(true);
    localStorage.setItem('block', JSON.stringify(1));
    localStorage.setItem('qIndex', JSON.stringify(0));
    window.location.href = '/apps';
    window.scrollTo({top:0, behavior: "smooth"});
  }

  const handleHome = () => {
    const projectQuestionsPage = window.location.pathname === '/apps/questions';
    const userLoggedIn = !Object.values(JSON.parse(localStorage.getItem('user'))).includes(null)
    if(userLoggedIn){
      if(projectQuestionsPage){
        if(confirm('Are you sure you wish to abandon this project?')){
          redirectToApps();
        }
      }else{
        redirectToApps();
      }
      
    }else{
      clearLocalData();
      navigate('/')
    }
    window.scrollTo({top:0, behavior: "smooth"});
  }

  /* eslint-enable no-restricted-globals */

  return (
    <div className='questionsBar_container'>
      <div className='appsBar_wrapper'>
      <div className="appsBar_sideContainer">
          {user && !Object.values(user).includes(null) ?
        <div className='appsBar_svg'>
            {hide ? 
              <Menu 
                width={'100%'} 
                height={'100%'} 
                onClick={()=>setHide((prev) => !prev)}/> :
              <Cross 
                width={'100%'} 
                height={'100%'} 
                onClick={()=>setHide((prev) => !prev)}/>
            }
        </div>
        :null
          }
        {/* <h1 className='appsBar_hdr' >Apps</h1> */}
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