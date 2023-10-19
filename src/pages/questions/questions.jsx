import { useEffect, useState } from 'react'
import '../../styles/questions.scss'
import UserQuestionsComp from '../../components/questions/userQuestionsComp';
import ProjectQuestions from '../../components/questions/projectQuestions';

const Questions = () => {

  const [block, setBlock] = useState();

  useEffect(()=>{
    function configBlock(){
      if(!localStorage.getItem('block')){
        localStorage.setItem('block', 0);
      }
      setBlock(localStorage.getItem('block'))
    }
    configBlock();
  },[])
console.log(block);

  return (
    <div className='questions_container'>
      {
        block == 0 ?
        <UserQuestionsComp setBlock={setBlock}/>
        :
        <ProjectQuestions setBlock={setBlock} block={block}/>
      }
    </div>
  )
}

export default Questions