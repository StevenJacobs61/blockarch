import React, { useState } from 'react'
import '../../../styles/result.scss'
import Compatible from './compatible'
import Compare from './compare'
import FullReport from './fullReport'
import { calculateAndSortResults } from '../../../functions/utility'

const ResultComp = ({project}) => {

  const [results, setResults] = useState(()=>{
    let tempRes = JSON.parse(localStorage.getItem('results'));
    const sortedResults = calculateAndSortResults(tempRes);
    return sortedResults;
  });

  return (
    <div className='resultsComp_container'>
        <h1 className='resultsComp_hdr'>{project.projectName}</h1>
        <Compatible results={results}/>
        <Compare results={results}/>
        <FullReport project={project}/>
    </div>
  )
}

export default ResultComp