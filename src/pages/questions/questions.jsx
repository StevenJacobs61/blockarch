import { useEffect, useState } from 'react'
import '../../styles/questions.scss'
import UserQuestionsComp from '../../components/questions/userQuestionsComp';
import ProjectQuestions from '../../components/questions/projectQuestions';
import Answers from '../../components/questions/answers';
import ProgressBar from '../../components/questions/progressBar';

const Questions = () => {

  const [block, setBlock] = useState();
  const [qIndex, setQIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(()=>{
    function configBlock(){
      if(!localStorage.getItem('block') || !localStorage.getItem('user')){
        localStorage.setItem('block', 0);
      }
      setBlock(parseInt(localStorage.getItem('block')))
    }
    configBlock();
    const localIndex = parseInt(localStorage.getItem('qIndex'));
    if(localIndex){
      setQIndex(localIndex);
    }
  },[])
  
  return (
    <div className='questions_container'>
        <div className="questions_left">
        <div className={`questions_questionsContainer ${isHidden ? 'fadeEffect hidden' : 'fadeEffect'}`}>
          {
            !block ?
            <UserQuestionsComp
              setBlock={setBlock}
              isHidden={isHidden}
              setIsHidden={setIsHidden}
              qIndex={qIndex}
              setQIndex={setQIndex}/>
            :
            <ProjectQuestions
              setBlock={setBlock}
              block={block}
              qIndex={qIndex}
              setQIndex={setQIndex}/>
          }
        </div>
    </div>

      <div className='questions_right'>
      <div className="questions_progressContainer">
        <ProgressBar 
        block={block} 
        setBlock={setBlock}
        qIndex={qIndex} 
        setQIndex={setQIndex}/>
      </div>
      <div className="questions_answersContainer">
          <Answers 
            qIndex={qIndex}
            setQIndex={setQIndex}
            block={block}
            setBlock={setBlock}/>
      </div>
      </div>
    </div>
  )
}

export default Questions