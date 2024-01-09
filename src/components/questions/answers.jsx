import React, { useEffect, useState } from 'react'
import '../../styles/answers.scss'
import { userQuestions } from '../../data/userQuestions';
import { projectQuestions } from '../../data/projectQuestions';
import { convertCamelToCapitalized } from '../../functions/covert';

const Answers = ({qIndex, setQIndex, block, setBlock}) => {

  const [answers, setAnswers] = useState();
  const [projectFields, setProjecFields] = useState(projectQuestions.map((question) => convertCamelToCapitalized(question.field)));
  const blockArray = [1,2,3,4,5,6,7];
  const [show, setShow] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  })

  useEffect(()=>{
    let localAns = null;
    if(parseInt(localStorage.getItem('block')) > 0){
      setShow(prev => ({...prev, [projectQuestions[qIndex].block - 1]: true}))
      const localProjectAns = JSON.parse(localStorage.getItem('project'));
      localAns = localProjectAns;
    }else{
      const localUserAns = JSON.parse(localStorage.getItem('user'));
      localAns = localUserAns;
    }
    setAnswers(localAns);
  }, [qIndex])

  return (
    <div className='answers_container'>
        {block == 0 ?
        userQuestions.map((question, k) => 
        { return question.input.map((item, i) => {
          if(item.title === 'Confirm Password' || item.field === 'finish') return null;
          else return <div className="answers_questionContainer" key={i} 
          onClick={()=> 
          setQIndex(k) + localStorage.setItem('qIndex', JSON.stringify(k)) + setBlock(0) + localStorage.setItem('block', JSON.stringify(0))
          }>
          <h1 className='answers_questionTitle'>{item.title}:</h1>
          <h2 className='answers_answer'>{answers && Object.keys(answers).filter((key) => key == item.field).map((filteredKey) => (
            answers[filteredKey]
        ))}
          </h2>
        </div>
         } )}
        )  :
         blockArray.map((b, k) => 
          <div className="answers_blockContainer" key={k}>
            <h1 
            className='answers_blockHdr' 
            onClick={()=> setShow((prev) => ({...prev, [k]:!show[k]}))}
            >{
              b === 1 ? "Business Information" :
              b === 2 ? "Participants" :
              b === 3 ? "Data Sharing" :
              b === 4 ? "Activity" :
              b === 5 ? "Business Ecosystem" :
              b === 6 ? "Development" :
              "Regulation"
            }
            </h1>
            {
              show[k] ? 
              projectQuestions.map((qu, j) => {
                if(qu.block === b && qu.title !== 'Submit your project'){
                  return <div className="answers_questionContainer" key={j} 
                    onClick={()=>setQIndex(j) 
                      + localStorage.setItem('qIndex', JSON.stringify(j)) 
                      + setBlock(projectQuestions[j].block) 
                      + localStorage.setItem('block', JSON.stringify(projectQuestions[j].block))
                    }>
                  <h1 className="answers_questionTitle">{projectFields[j]}:</h1>
                  {projectQuestions[j].endpoint === 'user-project' && answers ? 
                    <h2 className='answers_answer'>
                      {typeof(answers[projectQuestions[j].field]) === 'string' ? convertCamelToCapitalized(answers[projectQuestions[j].field]) 
                      : answers[projectQuestions[j].field] === true ? "Yes" : answers[projectQuestions[j].field]  === false ? 'No' : 
                      typeof(answers[projectQuestions[j].field]) ? answers[projectQuestions[j].field] : null}
                      </h2> :
                    answers ?
                    <h2 className='answers_answer'>{
                    Object.keys(answers).map((ansKey) => {
                      let fieldStr =  projectQuestions[j].field.slice(1, 4)
                      let fieldStrTwo =  projectQuestions[j].field.slice(-5)
                      let field = null;
                      let ansObj = null;
                      if(ansKey.includes(fieldStr) || ansKey.includes(fieldStrTwo)){
                       ansObj = answers[ansKey];
                      }
                      if(ansObj){
                        field = Object.keys(ansObj).find((key) => ansObj[key])
                      }
                      return  field
                    })
                  }</h2>
                    : null
                  }
                </div>
                }
              })
              
              : null
            }
          </div>
         )}
    </div>
  )
}

export default Answers;