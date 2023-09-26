import '../../../styles/aboutHero.scss'
import Capture from '../capture'
import Help from '../../../img/help.jpg'

const AboutHero = () => {
  return (
    <div className='aboutHero_container'>

        <div className='aboutHero_left'>
        <h1 className='aboutHero_hdr'>Bridging the Startup Technology Gap</h1>
        <p className='aboutHero_subtext'>Risk-free innovation for startups looking to embark on their digital transformation.</p>
        <Capture/>
        </div>

        <div className='aboutHero_right'>
          <div className='aboutHero_imgContainer'>
            <img 
            src={Help} alt="help" 
            width='90%' height='90%' 
           />
          </div>
        </div>
      </div>
  )
}

export default AboutHero