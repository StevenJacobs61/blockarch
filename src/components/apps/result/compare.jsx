
import React from 'react'
import '../../../styles/compare.scss'
import '../../../styles/resultComp.scss';
import { ReactComponent as Ethereum } from '../../../svg/ethereum.svg';

const Compare = () => {
  return (
    <div className='resultComp_container'>
        <div className="compare_container">
            <h1 className='compare_hdr'>Compare blockchains</h1>
            <div className="compare_grid">
              <div className="compare_gridColumn">
                <div className="compare_topContainer">
                  
                </div>
                <div className="compare_bottomContainer">
                  <div className="compare_titleContainer">
                    <p className='compare_blockTitle'>Business Information</p>
                  </div>
                  <div className="compare_titleContainer">
                    <p className='compare_blockTitle'>Participants</p>
                  </div>
                  <div className="compare_titleContainer">
                    <p className='compare_blockTitle'>Data Sharing</p>
                  </div>
                  <div className="compare_titleContainer">
                    <p className='compare_blockTitle'>Activity</p>
                  </div>
                  <div className="compare_titleContainer">
                    <p className='compare_blockTitle'>Regulation</p>
                  </div>
                  <div className="compare_titleContainer">
                    <p className='compare_blockTitle'>Business Ecosystem</p>
                  </div>
                  <div className="compare_titleContainer">
                    <p className='compare_blockTitle'>Development</p>
                  </div>
                </div>
              </div>
              <div className="compare_gridColumn">
                <div className="compare_topContainer">
                  <div className="compare_logoContainer">
                    <Ethereum width={'100%'} height={'100%'}/>
                  </div>
                  <h2 className='compare_title'>Ethereum</h2>
                </div>
                <div className="compare_bottomContainer">
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                </div>
              </div>
              <div className="compare_gridColumn">
                <div className="compare_topContainer">
                  <div className="compare_logoContainer">
                    <Ethereum width={'100%'} height={'100%'}/>
                  </div>
                  <h2 className='compare_title'>Ethereum</h2>
                </div>
                <div className="compare_bottomContainer">
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                </div>
              </div>
              <div className="compare_gridColumn">
                <div className="compare_topContainer">
                  <div className="compare_logoContainer">
                    <Ethereum width={'100%'} height={'100%'}/>
                  </div>
                  <h2 className='compare_title'>Ethereum</h2>
                </div>
                <div className="compare_bottomContainer">
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                  <div className="compare_scoreContainer">
                    <p className='compare_score'>xx</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Compare;