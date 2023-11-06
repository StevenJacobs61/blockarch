import React from 'react'
import '../../styles/result.scss'
import ResultComp from '../../components/apps/result/resultComp'

const Result = () => {
  return (
    <div className='result_container'>
      {/* <h1 className='result_hdr'>Your app</h1> */}
      <ResultComp/>
    </div>
  )
}

export default Result