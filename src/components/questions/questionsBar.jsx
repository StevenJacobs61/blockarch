import { useNavigate } from 'react-router-dom'
import '../../styles/questionsBar.scss'
import { ReactComponent as Logo } from '../../svg/logo-with-name.svg'
import { clearLocalData, isNull } from '../../functions/utility';

const QuestionsBar = () => {

  const navigate = useNavigate();

  const handleNavigate = () =>{
    if(!isNull(JSON.parse(localStorage.getItem('user')))){
      localStorage.removeItem('project');
      localStorage.setItem('block', JSON.stringify(1));
      localStorage.setItem('qIndex', JSON.stringify(0));
      navigate('/apps');
    }else{
      clearLocalData();
      navigate('/')
    }
  }

  return (
    <div className='questionsBar_container'>
      <div className="questionsBar_logoContainer">
        <Logo 
        onClick={()=> handleNavigate()}
        width='100%'
        height='100%'/>
      </div>
    </div>
  )
}

export default QuestionsBar