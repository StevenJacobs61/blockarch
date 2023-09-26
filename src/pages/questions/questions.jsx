import { useState } from 'react'
import '../../styles/questions.scss'
import UserQuestionsComp from '../../components/questions/userQuestionsComp';
import ProjectQuestions from '../../components/questions/projectQuestions';

const Questions = () => {


  return (
    <div className='questions_container'>
      <UserQuestionsComp/>
      <ProjectQuestions/>
    </div>
  )
}

export default Questions