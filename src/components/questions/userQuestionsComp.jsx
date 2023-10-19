import { useState } from 'react';
import '../../styles/userQuestions.scss'
import { add, getById, getUserByEmail } from '../../functions/userAPI';
import { userQuestions } from '../../data/userQuestions';

const UserQuestionsComp = ({setBlock}) => {
    const [buttonText, setButtonText] = useState('Submit');
    const [qIndex, setQIndex] = useState(0);
  
    const [user, setUser] = useState({});
  
    const handleSubmit = async () => {
      setButtonText("Sending")
      
      try {
        const response = await add(user, '/user')
        // const response =  await getUserByEmail('hello@blocks.com')
        // const responseUser = await updateUser({company_size: 1000}, response.id)
        // const responsedel = await deleteUserById(response.id)
        setButtonText('Success');

        console.log(response);
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('block', 1)
        setBlock(1)
        setUser({});
      } catch (error) {
        setButtonText('Error')
      }
      setButtonText('Submit')
    };
    const handleIndex = () => {
      setQIndex((prev)=> prev === userQuestions.length - 1 ? 0 : prev+1);
    }
  return (
    <div className='userQuestions_container'>
    <h1>User Questions</h1>
    <div className='userQuestions_questionsContainer' >
      <h2 className='userQuestions_question'>{userQuestions[qIndex].title}</h2>
      {userQuestions[qIndex].input.map((input, i) => 
      <div className='userQuestions_inputContainer' key={i}>
      <label className='userQuestions_label'>{input.title}</label>
      <input type={input.type} value={user[input.field] || ''} onChange={(e)=> setUser((prev) => ({...prev, [input.field]:e.target.value}))}/>
      </div>
      )}
    </div>
    <button className='userQuestions_button' onClick={()=>handleIndex()}>Next</button>
    <button className='userQuestions_button' onClick={()=>handleSubmit()}>{buttonText}</button>
  </div>
  )
}

export default UserQuestionsComp