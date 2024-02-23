import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { ReactComponent as Ripple } from "../../svg/blockchains/ripple.svg";
import { ReactComponent as Ether } from "../../svg/blockchains/ethereum.svg";
import { ReactComponent as Polygon } from "../../svg/blockchains/polygon.svg";
import { ReactComponent as Avalanche } from "../../svg/blockchains/avalanche.svg";
import { ReactComponent as Corda } from "../../svg/blockchains/corda.svg";
import { ReactComponent as Binance } from "../../svg/blockchains/bsc.svg";
import { ReactComponent as Near } from "../../svg/blockchains/near.svg";
import { ReactComponent as Solana } from "../../svg/blockchains/solana.svg";
import { ReactComponent as Hyperledger } from "../../svg/blockchains/hyperledger.svg";
import { motion } from "framer-motion";
import "../../styles/banner.scss";

const Banner = () => {
  const [gradientWidth, setGradientWidth] = useState(150);
  const [speed, setSpeed] = useState(50);

  useEffect(() => {
    const updateSettingsWidth = () => {
      const screenWidth = window.innerWidth;
      const calculatedGradientWidth =
        screenWidth < 1024 ? 150 : screenWidth < 1200 ? 400 : 600;
      setGradientWidth(calculatedGradientWidth);
      const calculatedSpeed =
        screenWidth < 1024 ? 50 : screenWidth < 1200 ? 100 : 110;
      setSpeed(calculatedSpeed);
    };
    updateSettingsWidth();
    window.addEventListener("resize", updateSettingsWidth);
    return () => {
      window.removeEventListener("resize", updateSettingsWidth);
    };
  }, []);
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.div
      className="banner__container"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <Marquee
        className="banner__marquee"
        autoFill
        gradient
        gradientWidth={gradientWidth}
        pauseOnHover
      >
        <a
          href="https://www.bnbchain.org/en/bnb-smart-chain"
          id="bsc"
          className="banner__icon-cont"
        >
          <Binance width="100%" height="100%" fill="#ffb8f4" />
        </a>
        <a
          href="https://xrpl.org/index.html"
          className="banner__icon-cont"
          id="ripple"
        >
          <Ripple width="100%" height="100%" fill="#ffb8f4" />
        </a>
        <a
          href="https://www.avax.network/"
          className="banner__icon-cont"
          id="avalanche"
        >
          <Avalanche width="100%" height="100%" fill="#ffb8f4" />
        </a>

        <a
          href="https://www.hyperledger.org/"
          className="banner__icon-cont"
          id="hyperledger"
        >
          <Hyperledger width="100%" height="100%" fill="#101010" />
        </a>
        <a href="https://polygon.technology/" className="banner__icon-cont">
          <Polygon width="100%" height="100%" fill="#ffb8f4" />
        </a>
        <a href="https://solana.com/" id="solana" className="banner__icon-cont">
          <Solana width="100%" height="100%" />
        </a>
        <a
          href="https://ethereum.org/"
          className="banner__icon-cont"
          id="ethereum"
        >
          <Ether width="100%" height="100%" fill="#ffb8f4" />
        </a>
        <a href="https://corda.net/" id="corda" className="banner__icon-cont">
          <Corda width="80%" height="80%" fill="#fe0000" />
        </a>
        <a href="https://near.org/" id="near" className="banner__icon-cont">
          <Near width="100%" height="100%" />
        </a>
      </Marquee>
    </motion.div>
  );
};

export default Banner;
