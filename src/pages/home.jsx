import "../styles/home.scss";
import { useEffect } from "react";
import { clearLocalData } from "../functions/utility";
import Hero from "../components/home/hero";

const Home = () => {
  useEffect(() => {
    clearLocalData();
  }, []);

  return (
    <section className="flex--col">
      <Hero />
    </section>
  );
};

export default Home;
