import React from "react";
import { motion } from "framer-motion";
import { ReactComponent as Chevron } from "../../svg/chevron.svg";
import { fadeInAnimationRight } from "../../data/motion";
import "../../styles/mainCard.scss";

export default function MainCard({ handleClick }) {
  return (
    <motion.div
      className="mainCard__container"
      variants={fadeInAnimationRight}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <h1 className="mainCard__hdr">
        Benefits of <span style={{ color: "#4a4444" }}>Blockarch</span>
      </h1>
      <p className="mainCard__text">
        <strong style={{ color: "#4a4444" }}>Blockarch</strong> is the leading
        toolkit that empowers everyone across all levels of technological
        expertise- from developers to entrepreneurs- to implement blockchain
        applications with confidence & ease.
      </p>
      <div className="infoCards__icons-cont">
        <div
          className="clickable btn infoCards__icon-cont"
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
