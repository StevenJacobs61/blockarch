import "../styles/home.scss";
import { useEffect } from "react";
import { clearLocalData } from "../functions/utility";
import Hero from "../components/home/hero";
import Message from "../components/home/message";
import Banner from "../components/home/banner";
import InfoCards from "../components/home/infoCards";

const Home = () => {
  useEffect(() => {
    clearLocalData();
  }, []);

  return (
    <section className="flex--col">
      <Hero />
      <Message />
      <Banner />
      <InfoCards />
    </section>
  );
};

export default Home;
