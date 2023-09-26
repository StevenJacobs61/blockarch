import React from 'react'
import '../../styles/capture.scss'

const Capture = () => {
  return (
    <div className='capture_container'>
        <h1 className='capture_label'>
            Join for early access. Sign Up Now!
        </h1>
        <div className='capture_inputContainer'>
            <input 
                type='email' 
                className='capture_input'
            />
            <button
                className='capture_button'>
                Submit
            </button>
        </div>
    </div>
  )
}

export default Capture