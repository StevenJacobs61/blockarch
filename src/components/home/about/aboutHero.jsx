import '../../../styles/aboutHero.scss'
import Capture from '../capture'

const AboutHero = () => {
  return (
    <div className='aboutHero_container'>
        <h1 className='aboutHero_hdr'>Bridging the technology startup gap</h1>
        <p className='aboutHero_subtext'>We understand blockchain is a complex landscape to navigate, and development can be challenging</p>
        <div className="aboutHero_captureContainer">
        <Capture/>
        </div>
        <button className='aboutHero_button'>Speak to one of our experts</button>
      </div>
  )
}

export default AboutHero