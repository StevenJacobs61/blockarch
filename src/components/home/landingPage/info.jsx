import '../../../styles/info.scss'
import CardAreaThree from '../../cardAreaThree'

const Info = () => {
  return (
    <div className='info_container'>
        <h1 className='gettingStarted_hdr'>How it works</h1>
        <p className='gettingStarted_subtext' >We understand blockchain technology is a complex landscape to navigate.</p>
        <CardAreaThree/>
        <div className='info_buttonsContainer'>
          <button className='info_button'>Speak to an expert</button>
          <button className='info_button'>Discover our expert resources</button>
        </div>
    </div>
  )
}

export default Info