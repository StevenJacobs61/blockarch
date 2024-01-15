import Capture from "../../components/home/capture";
import Sequence from "../../components/home/landingPage/sequence";
import '../../styles/home.scss'
import Info from "../../components/home/landingPage/info";
import Perks from "../../components/home/landingPage/perks";
import GettingStarted from "../../components/home/landingPage/gettingStarted";
import BlogComp from "../../components/home/landingPage/blogComp";
import { useEffect } from "react";
import { clearLocalData } from "../../functions/utility";

const LandingPage = () => {

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    if(localUser && !Object.values(localUser).some((val) => val === null || val === undefined || val == NaN || val === "" || val.toString().trim() === "")){
      window.location.href = "/apps"
    }else{
      clearLocalData();
    }
  }, []);

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
           <div className="landingPage_captureContainer">
             <div className="landingPage_captureWrapper">
           <Capture/> 
             </div>
           </div>
        </div>
        <Sequence/>
      </div>
        <div className="home_container" >
        </div>
        <div className="home_container">
          <GettingStarted/>
        </div>
        <div className="home_container">
          <Info/>
        </div>
        <div className="home_container">
          <Perks/>
        </div>
        <div className="home_container">
          <BlogComp/>
        </div>
      </div> 
  )
}

export default LandingPage