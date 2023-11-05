import { useNavigate } from 'react-router-dom'
import '../../styles/questionsBar.scss'
import { ReactComponent as Logo } from '../../svg/logo-with-name.svg'

const QuestionsBar = () => {

  const navigate = useNavigate();

  return (
    <div className='questionsBar_container'>
      <div className="questionsBar_logoContainer">
        <Logo 
        onClick={()=> navigate('/')}
        width='100%'
        height='100%'/>
      </div>
    </div>
  )
}

export default QuestionsBar