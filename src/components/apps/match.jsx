import React from 'react'
import '../../styles/match.scss'
import { ReactComponent as Ethereum } from '../../svg/ethereum.svg'
import { useNavigate } from 'react-router-dom';


const Match = () => {

const navigate = useNavigate();

  return (
    <div className='match_container'>
        <div className="match_topContainer">
            <div className="match_left">
                <div className="match_logoContainer">
                    <Ethereum width={'100%'} height={'100%'}/>
                </div>
            </div>
            <div className="match_right">
                <h1 className='match_hdr'>Match 1</h1>
                <p className='match_text'>Last updated: xx/xx/xx</p>
            </div>
        </div>
        <div className="match_bottomContainer">
            <button className='match_button'
            onClick={()=>navigate('/apps/result')}
            >View match</button>
        </div>
    </div>
  )
}

export default Match