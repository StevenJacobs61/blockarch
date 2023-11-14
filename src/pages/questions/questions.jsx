import { useEffect, useState } from 'react'
import '../../styles/questions.scss'
import UserQuestionsComp from '../../components/questions/userQuestionsComp';
import ProjectQuestions from '../../components/questions/projectQuestions';
import Answers from '../../components/questions/answers';
import ProgressBar from '../../components/questions/progressBar';

const Questions = () => {

  const [block, setBlock] = useState();
  const [answers, setAnswers] = useState();
  const [qIndex, setQIndex] = useState(0);

  useEffect(()=>{
    function configBlock(){
      if(!localStorage.getItem('block') || !localStorage.getItem('user')){
        localStorage.setItem('block', 0);
      }
      setBlock(parseInt(localStorage.getItem('block')))
    }
    configBlock();
  },[])
  const [isHidden, setIsHidden] = useState(false);
  

  return (
    <div className='questions_container'>
      <div className={`questions_questionsContainer ${isHidden ? 'fadeEffect hidden' : 'fadeEffect'}`}>
        {
          !block ?
          <UserQuestionsComp 
            setBlock={setBlock} 
            isHidden={isHidden} 
            setIsHidden={setIsHidden} 
            setAnswers={setAnswers}
            qIndex={qIndex}
            setQIndex={setQIndex}/>
          :
          <ProjectQuestions 
            setBlock={setBlock} 
            block={block}
            qIndex={qIndex}
            setQIndex={setQIndex}
            setAnswers={setAnswers}/>
        }
      </div>
      <div className="questions_progressContainer">
        <ProgressBar 
        block={block} 
        setBlock={setBlock}
        answers={answers} 
        qIndex={qIndex} 
        setQIndex={setQIndex}/>
      </div>
      <div className="questions_answersContainer">
          <Answers 
            answers={answers}
            qIndex={qIndex}
            setQIndex={setQIndex}
            block={block}
            setBlock={setBlock}/>
      </div>
    </div>
  )
}

export default Questions