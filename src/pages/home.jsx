import "../styles/home.scss";
import { useEffect } from "react";
import { clearLocalData } from "../functions/utility";
import Hero from "../components/home/hero";
import Message from "../components/home/message";
import Banner from "../components/home/banner";

const Home = () => {
  useEffect(() => {
    clearLocalData();
  }, []);

  return (
    <section className="flex--col">
      <Hero />
      <Banner />
      <Message />
    </section>
  );
};

export default Home;
