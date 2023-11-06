import React from 'react'
import '../../../styles/result.scss'
import Compatible from './compatible'
import Compare from './compare'
import FullReport from './fullReport'

const ResultComp = () => {
  return (
    <div className='resultsComp_container'>
        <h1 className='resultsComp_hdr'>Project Name</h1>
        <Compatible/>
        <Compare/>
        <FullReport/>
    </div>
  )
}

export default ResultComp