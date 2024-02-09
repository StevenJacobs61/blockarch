import "../styles/home.scss";
import { useEffect } from "react";
import { clearLocalData } from "../functions/utility";
import Hero from "../components/home/hero";
import Message from "../components/home/message";

const Home = () => {
  useEffect(() => {
    clearLocalData();
  }, []);

  return (
    <section className="flex--col">
      <Hero />
      <Message />
    </section>
  );
};

export default Home;
