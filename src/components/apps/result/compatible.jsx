import React from 'react'
import '../../../styles/compatible.scss';
import '../../../styles/resultComp.scss';
import { ReactComponent as Logo } from '../../../svg/ethereum.svg';

const Compatible = () => {
  return (
    <div className="resultComp_container">
        <div className='compatible_container'>
            <div className="compatible_left">
                <h1 className='compatible_hdr'>Most compatible blockchain</h1>
                <div className="compatible_chartContainer"></div>
            </div>
            <div className="compatible_right">
                <div className="compatible_hdrContainer">
                    <h2 className='compatible_subHdr'>Position</h2>
                    <h2 className='compatible_subHdr'>Blockchain</h2>
                    <h2 className='compatible_subHdr'>Score</h2>
                </div>
                <div className="compatible_contentContainer">
                    <div className="compatible_content">
                        <h3 className='compatible_contentHdr'>1st</h3>
                        <div className='compatible_blockchain'>
                            <div className='compatible_logoContainer'>
                                <Logo width={'100%'} height={'100%'}/>
                            </div>
                            <h3 className='compatible_blockchainTitle'>Ethereum</h3>
                        </div>
                        <div className='compatible_contentScoreContainer'>
                        <div className='compatible_contentScore'></div>
                        </div>
                    </div>
                    <div className="compatible_content">
                        <h3 className='compatible_contentHdr'>1st</h3>
                        <div className='compatible_blockchain'>
                            <div className='compatible_logoContainer'>
                                <Logo width={'100%'} height={'100%'}/>
                            </div>
                            <h3 className='compatible_blockchainTitle'>Ethereum</h3>
                        </div>
                        <div className='compatible_contentScoreContainer'>
                        <div className='compatible_contentScore'></div>
                        </div>
                    </div>
                    <div className="compatible_content">
                        <h3 className='compatible_contentHdr'>1st</h3>
                        <div className='compatible_blockchain'>
                            <div className='compatible_logoContainer'>
                                <Logo width={'100%'} height={'100%'}/>
                            </div>
                            <h3 className='compatible_blockchainTitle'>Ethereum</h3>
                        </div>
                        <div className='compatible_contentScoreContainer'>
                        <div className='compatible_contentScore'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compatible