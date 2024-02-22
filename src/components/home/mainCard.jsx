import React from "react";
import "../../styles/infoCards.scss";
import { motion } from "framer-motion";
import { ReactComponent as Chevron } from "../../svg/chevron.svg";

export default function MainCard({ handleClick }) {
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
      className="mainCard__container"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1 className="mainCard__hdr">Benefits of Blockarch</h1>
      <p className="mainCard__text">
        Blockarch is the leading toolkit that empowers everyone across all
        levels of technological expertise- from developers to entrepreneurs- to
        implement blockchain applications with confidence & ease.
      </p>
      <div className="infoCards__icons-cont">
        <div
          className="infoCards__icon-cont "
          style={{
            paddingRight: "-1rem",
          }}
          onClick={() => handleClick(-1)}
        >
          <Chevron width={100} height={100} className="infoCards__icon" />
        </div>
        <div
          className="infoCards__icon-cont clickable"
          style={{
            paddingLeft: "-1rem",
          }}
          onClick={() => handleClick(1)}
        >
          <Chevron width={100} height={100} className="infoCards__icon" />
        </div>
      </div>
    </motion.div>
  );
}
