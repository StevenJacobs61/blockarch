import Navbar from "./navbar";
import "../../styles/layout.scss";
import { Outlet } from "react-router-dom";
import Footer from "./footer";

const Layout = () => {
  return (
    <section className="flex--col">
      <div className="bg-circle--1"></div>
      <div className="bg-circle--2"></div>
      <Navbar />
      <main className="flex--col layout__main">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
