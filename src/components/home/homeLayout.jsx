import HomeBar from "./homeBar"
import '../../styles/home.scss'
import { Outlet } from "react-router-dom"
import Footer from '../home/footer'

const HomeLayout = () => {


  return (
    <div className="layout_pageContainer">
          <HomeBar/>
      <div className="layout_container">
          <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomeLayout