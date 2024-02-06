import HomeBar from "./homeBar";
import "../../styles/home.scss";
import { Outlet } from "react-router-dom";
import Footer from "../home/footer";

const HomeLayout = () => {
  return (
    <div className="layout__container">
      <HomeBar />
      <div className="layout__container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
