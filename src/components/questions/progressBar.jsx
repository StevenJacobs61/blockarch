import React, { useEffect, useState } from 'react'
import '../../styles/progressBar.scss'
import { projectQuestions } from '../../data/projectQuestions';


const ProgressBar = ({block, qIndex, setQIndex, setBlock}) => {
    
    const [status, setStatus] = useState({
        0: 'untouched',
        1: 'untouched',
        2: 'untouched',
        3: 'untouched',
        4: 'untouched',
        5: 'untouched',
        6: 'untouched',
        7: 'untouched'
    });

    function getBlockQuestions(key){
        return projectQuestions.filter((q) => q.block == key);
    }

    const findBlockOneStatus = (answers) => {
        Object.keys(status).map((key) => {
           const blockQuestions = getBlockQuestions(key);
            let count = 0;
             blockQuestions.forEach((q) => {
                if(q.endpoint === 'user-project'){
                    if(answers[q.field] !== null && answers[q.field] !== ""){
                        count++;
                    }
                }else{
                    const match = Object.keys(answers).find((key) => key.includes(q.field.slice(1, 4)) || key.includes(q.field.slice(-5)))
                    if(!Object.keys(answers[match]).length){
                        return
                    }else{
                        count++;
                    }
                }
            })
            if (count === 0) {
                setStatus(prev => ({...prev, [key]:'untouched'}));
            } else if (count < blockQuestions.length) {
                setStatus(prev => ({...prev, [key]:'incomplete'}));
            } else if (count === blockQuestions.length) {
                setStatus(prev => ({...prev, [key]:'complete'}));
            }
        return null;
    })
        return;
    }
 
    useEffect(()=>{
        let answers = JSON.parse(localStorage.getItem('project'));
        if(answers){
            findBlockOneStatus(answers);
        }
        },[qIndex, block])

    const handleQIndex = (i) => {
        if(parseInt(localStorage.getItem('block')) === 0 ){
            return 
        }
        if(i !== 0){
            let index = null;
            let found = false
            projectQuestions.map((q, j) => {
                if(q.block == i && !found){
                    index = j;
                    found = true;
                }
            })
            setQIndex(index);
            setBlock(i);
            localStorage.setItem('qIndex', JSON.stringify(index));
            localStorage.setItem('block', JSON.stringify(i));
        }
    }
        
        const stylesArray = [
            {
                background: block === 0 ? 'linear-gradient(to right, #02e044, #fff)' : '#02e044',
                animation: block === 0 && status[0] !== 'complete' ? 'loading 2s infinite' : '',
                border: block === 0 ? 'none' : '',
               },
            {
                background: 
                    block < 1 && status[1] === 'untouched' ? '#fff' : 
                    status[1] === 'complete' ? '#02e044' : 
                    block > 1 && status[1] === 'incomplete' ? '#fff' 
                    : null,
                border: block === 1 ? 'none' : '',
                    animation: block === 1 && status[1] !== 'complete' ? 'loading 2s infinite' : ''
               },
            {
                background: 
                    status[2] === 'complete' ? '#02e044' : 
                    block < 2 && status[2] === 'untouched' ? '#fff' : 
                    block !== 2 && status[2] === 'incomplete' ? '#fff' 
                    : null,
                    border: block === 2 ? 'none' : '',
                    animation: block === 2 && status[2] !== 'complete' ? 'loading 2s infinite' : ''
               },
            {
                background: 
                    status[3] === 'complete' ? '#02e044' : 
                    block < 3 && status[3] === 'untouched' ? '#fff' : 
                    block !== 3 && status[3] === 'incomplete' ? '#fff' 
                    : null,
                    border: block === 3 ? 'none' : '',
                    animation: block === 3 && status[3] !== 'complete' ? 'loading 2s infinite' : ''
               },
            {
                background: 
                    status[4] === 'complete' ? '#02e044' : 
                    block < 4 && status[4] === 'untouched' ? '#fff' : 
                    block !== 4 && status[4] === 'incomplete' ? '#fff' 
                    : null,
                    border: block === 4 ? 'none' : '',
                    animation: block === 4 && status[4] !== 'complete' ? 'loading 2s infinite' : ''
               },
            {
                background: 
                status[5] === 'complete' ? '#02e044' : 
                block < 5 && status[5] === 'untouched' ? '#fff' : 
                block !== 5 && status[5] === 'incomplete' ? '#fff' 
                : null,
                border: block === 5 ? 'none' : '',
                animation: block === 5 && status[5] !== 'complete' ? 'loading 2s infinite' : ''
               },
            {
                background: 
                status[6] === 'complete' ? '#02e044' : 
                block < 6 && status[6] === 'untouched' ? '#fff' : 
                block !== 6 && status[6] === 'incomplete' ? '#fff' 
                : null,
                border: block === 6 ? 'none' : '',
                animation: block === 6 && status[6] !== 'complete' ? 'loading 2s infinite' : ''
               },
            {
                background: 
                status[7] === 'complete' ? '#02e044' : 
                block < 7 && status[7] === 'untouched' ? '#fff' : 
                block !== 7 && status[7] === 'incomplete' ? '#fff' 
                : null,
                border: block === 7 ? 'none' : '',
                animation: block === 7 && status[7] !== 'complete' ? 'loading 2s infinite' : ''
               }
        ]
        

  return (
    <div className="progressBar_container">
        {stylesArray.map((el, i) => 
          <div className='progressBar_section' key={i} style={el} onClick={()=>handleQIndex(i)}/>
        )}
        </div>
  )
}

export default ProgressBar