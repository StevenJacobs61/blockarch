import React, { useState } from 'react'
import '../../../styles/result.scss'
import Compatible from './compatible'
import Compare from './compare'
import FullReport from './fullReport'

const ResultComp = ({project}) => {

  const [results, setResults] = useState(()=>{
    let tempRes = JSON.parse(localStorage.getItem('results'));
    function calculateBlockTotal(result){
      let total = 
        result.block_1_score + 
        result.block_2_score + 
        result.block_3_score + 
        result.block_4_score + 
        result.block_5_score + 
        result.block_6_score + 
        result.block_7_score; 
      result.total = total;
    }
    tempRes.forEach((result)=>calculateBlockTotal(result));
    tempRes.sort((a, b) => b.total - a.total);
    return tempRes;
  });

  return (
    <div className='resultsComp_container'>
        <h1 className='resultsComp_hdr'>{project.projectName}</h1>
        <Compatible results={results}/>
        <Compare results={results}/>
        <FullReport results={results}/>
    </div>
  )
}

export default ResultComp