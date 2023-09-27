import Capture from "../../components/home/capture";
import Sequence from "../../components/home/landingPage/sequence";
import '../../styles/home.scss'
import Info from "../../components/home/landingPage/info";
import Separator from "../../components/separator";
import Perks from "../../components/home/landingPage/perks";
import Img from '../../img/heroImg.jpg'
import GettingStarted from "../../components/home/landingPage/gettingStarted";
import BlogComp from "../../components/home/landingPage/blogComp";

const LandingPage = () => {
  return (
    <div className="landingPage_container">

      <div className="landingPage_heroContainer">

        <div className="landingPage_heroLeft">
          <h1 className="landingPage_hdr">Architect Blockchain Applications
            in Minutes.
          </h1>
          <ul className="landingPage_listContainer">
            <li className="landingPage_listItem">Cost-Effective Development</li>
            <li className="landingPage_listItem">Reduce Knowledge Gaps</li>
            <li className="landingPage_listItem">Accelerate end-to-end design</li>
          </ul>
          {/* <h2 className="landingPage_subtext">
            Our AI Architect tool helps entrepreneurs quickly
            launch and validate their business ideas.
          </h2> */}
          <div className="landingPage_captureContainerTwo">
            <div className="landingPage_captureWrapper">
          <Capture/>
            </div>
          </div>
        </div>

        <div className="landingPage_heroRight">
          <div className="landingPage_heroImgContainer">
          <img src={Img} alt="hero"
           width='100%'
           height='100%'
           style={{
             objectFit: 'cover',
         }} />
          </div>
        </div>

      </div>

      <div className="landingPage_captureContainer">
        <div className="landingPage_captureWrapper">
      <Capture/> 
        </div>
      </div>
      <Separator/>
        <div className="home_container">
        <Sequence/>
        </div>
      <Separator/>
        <div className="home_container">
          <GettingStarted/>
        </div>
        <Separator/>
        <div className="home_container">
          <Info/>
        </div>
        <Separator/>
        <div className="home_container">
          <Perks/>
        </div>
        <Separator/>
        <div className="home_container">
          <BlogComp/>
        </div>
        <Separator/>
      </div> 
  )
}

export default LandingPage