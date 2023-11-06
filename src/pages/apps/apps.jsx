import React from 'react'
import '../../styles/apps.scss'
import Match from '../../components/apps/match'

const Apps = () => {
  return (
    <div className='apps_container'>
      <h1 className='apps_hdr'>Your Projects</h1>
      <div className="apps_matchesContainer">
        <Match/>
        <Match/>
        <Match/>
      </div>
    </div>
  )
}

export default Apps