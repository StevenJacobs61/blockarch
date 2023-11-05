import { useEffect, useState } from 'react'
import '../../styles/questions.scss'
import UserQuestionsComp from '../../components/questions/userQuestionsComp';
import ProjectQuestions from '../../components/questions/projectQuestions';

const Questions = () => {

  const [block, setBlock] = useState();

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
  
 const progressStyleOne = {
  background: block === 0 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044',
 }
 const progressStyleTwo = {
  background: block < 1 ? '#fff' : block === 1 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044',
 }
 const progressStyleThree = {
  background: block < 2 ? '#fff' : block === 2 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044'
 }
 const progressStyleFour = {
  background: block < 3 ? '#fff' : block === 3 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044'
 }
 const progressStyleFive = {
  background: block < 4 ? '#fff' : block === 4 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044'
 }
 const progressStyleSix = {
  background: block < 5 ? '#fff' : block === 5 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044'
 }
 const progressStyleSeven = {
  background: block < 6 ? '#fff' : block === 6 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044'
 }
 const progressStyleEight = {
  background: block < 7 ? '#fff' : block === 7 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044'
 }
  return (
    <div className='questions_container'>
      <div className="questions_progressContainer">
        <div className="questions_progressBar">
          <div className='questions_progressBarSection' style={progressStyleOne}></div>
          <div className='questions_progressBarSection' style={progressStyleTwo}></div>
          <div className='questions_progressBarSection' style={progressStyleThree}></div>
          <div className='questions_progressBarSection' style={progressStyleFour}></div>
          <div className='questions_progressBarSection' style={progressStyleFive}></div>
          <div className='questions_progressBarSection' style={progressStyleSix}></div>
          <div className='questions_progressBarSection' style={progressStyleSeven}></div>
          <div className='questions_progressBarSection' style={progressStyleEight}></div>
        </div>
      </div>
      <div className={`questions_questionsContainer ${isHidden ? 'fadeEffect hidden' : 'fadeEffect'}`}>
        {
          block == 0 ?
          <UserQuestionsComp setBlock={setBlock} isHidden={isHidden} setIsHidden={setIsHidden}/>
          :
          <ProjectQuestions setBlock={setBlock} block={block}/>
        }
      </div>
    </div>
  )
}

export default Questions