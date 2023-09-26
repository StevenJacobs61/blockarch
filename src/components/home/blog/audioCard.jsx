import React from 'react'
import '../../../styles/blog.scss'
import { ReactComponent as Play } from '../../../svg/play.svg'


const AudioCard = ({title}) => {
  return (
    <div className='blogAudio_audioContainer'>
        <div className='blogAudio_iconContainer'>
            <Play width='100%' height='100%'/>
        </div>
        <p className='blogAudio_title'>
        {title}
        </p>
    </div>
  )
}

export default AudioCard