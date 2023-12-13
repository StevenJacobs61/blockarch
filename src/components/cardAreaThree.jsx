import '../styles/cardThree.scss'
import {ReactComponent as Ripple} from '../svg/ripple.svg'
import {ReactComponent as Ether} from '../svg/ethereum.svg'
import {ReactComponent as Polygon} from '../svg/polygon.svg'
import {ReactComponent as Avalanche} from '../svg/avalanche.svg'
import {ReactComponent as Corda} from '../svg/corda.svg'
import {ReactComponent as Solana} from '../svg/solana.svg'
import {ReactComponent as Binance} from '../svg/bsc.svg'
import {ReactComponent as Near} from '../svg/near.svg'
import {ReactComponent as Ada} from '../svg/ada.svg'

const CardAreaThree = () => {
 
  const data = [
    'Project Information',
    'Participants',
    'Data Sharing',
    'Activity',
    'Ecosystem',
    'Development Resources',
    'Regulation'
  ]
  const gridData = [
    <Ripple width={'100%'} height={'100%'}/>,
    <Ether width={'100%'} height={'100%'}/>,
    <Polygon width={'100%'} height={'100%'} style={{transform: 'scale(1.1)'}}/>,
    <Avalanche width={'100%'} height={'100%'}/>,
    <Corda width={'100%'} height={'100%'} style={{transform: 'scale(0.75)'}} fill='#fe0000'/>,
    <Solana width={'100%'} height={'100%'} style={{transform: 'scale(0.60)'}}/>,
    <Near width={'100%'} height={'100%'} style={{transform: 'scale(0.50)'}}/>,
    <Binance width={'100%'} height={'100%'} style={{transform: 'scale(0.65)'}}/>,
    <Ada width={'100%'} height={'100%'} style={{transform: 'scale(0.65)'}}/>
  ]

  return (
    <div className='cardThree_container'>

      <div className="cardThree_cardContainer">
        <div className='cardThree_card' id='first-child'>
          <div className="cardThree_topContainer">
            <h2 className='cardThree_number'>01</h2>
            <div className="cardThree_topRight">
              <h1 className='cardThree_hdr'>Describe</h1>
              <h3 className='cardThree_subtext'>Tell us about your idea.</h3>
            </div>
          </div>
          <div className='cardThree_infoContainer'>
            {data.map((item, i)=>
            <div className="cardThree_infoCard" key={i}>
              <p className='cardThree_infoText'>{item}</p>
            </div>
            )}
          </div>
        </div>
      </div>

      <div className="cardThree_cardContainer">
        <div className='cardThree_card' id='second-child'>
          <div className="cardThree_topContainer">
            <h2 className='cardThree_number'>02</h2>
            <div className="cardThree_topRight">
              <h1 className='cardThree_hdr'>Match</h1>
              <h3 className='cardThree_subtext'>Our AI will match it with suitible blockchains</h3>
            </div>
          </div>
          <div className='cardThree_infoGrid'>
            {gridData.map((item, i)=>
            <div className="cardThree_infoGridCard" key={i}>
              {item}
            </div>
            )}
          </div>
        </div>
      </div>

      <div className="cardThree_cardContainer">
        <div className='cardThree_card' id='third-child'>
          <div className="cardThree_topContainer">
            <h2 className='cardThree_number'>03</h2>
            <div className="cardThree_topRight">
              <h1 className='cardThree_hdr'>Build</h1>
              <h3 className='cardThree_subtext'>Start building!</h3>
            </div>
          </div>
          <div className='cardThree_infoGridThird'>
            <div className="cardThree_infoGridCardTop">
              <div className='cardThree_infoGridCardTopInner'>
                <p>Corda</p>
              </div>
            </div>

            <div className='cardThree_topGrid'>
            <div className="cardThree_infoGridCardThirdTop">
              <div className='cardThree_donutOuter'>
                <p className='cardThree_donutText'>75%</p>
              </div>
            </div>
            <div className="cardThree_infoGridCardThirdTop">
            <Corda width={'100%'} height={'100%'} style={{transform: 'scale(0.9)'}} fill='#fe0000'/>
            </div>

            </div>
            <div className="cardThree_infoGridCardThird">
              <p className='cardThree_infoCardText'>View Matches</p>
            </div>
            <div className="cardThree_infoGridCardThird">
              <p className='cardThree_infoCardText'>Generate Compatibility Report</p>
            </div>
            <div className="cardThree_infoGridCardThird">
              <p className='cardThree_infoCardText'>Generate Architecture</p>
              <div className='cardThree_comingSoonContainer'>
                <p className='cardThree_comingSoon'>Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardAreaThree