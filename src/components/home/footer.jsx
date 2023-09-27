import '../../styles/footer.scss'
import Capture from './capture'
import { ReactComponent as Smile } from '../../svg/smile.svg'
import { ReactComponent as Logo } from '../../svg/logo-with-name.svg'

const Footer = () => {
  return (
    <div className='footer_container'>
        <h1 className='info_hdr'>Start Bridging The Startup Technology Gap Today</h1>
        <div className="footer_captureContainer">
        <Capture/>
        </div>
        <span className='footer_iconContainer'>
            <Logo width='100%' height='100%'/>
        </span>
        <p className='info_subtext'>Sign up for early access. Join hundreds of entrepreneurs today and start architecting.</p>
    </div>
  )
}

export default Footer