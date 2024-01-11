import React from 'react'
import '../../../styles/fullReport.scss'
import '../../../styles/resultComp.scss'

const FullReport = ({project}) => {

  return (
    <div className='resultComp_container'>
        <div className="fullReport_container">
            <h1 className='resultComp_hdr'>Full Report</h1>
            <div className='fullReport_contentContainer'>
            <p className='fullReport_text'>{project.summary}</p>
            </div>
        </div>
    </div>
  )
}

export default FullReport