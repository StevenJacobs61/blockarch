import React from "react";
import "../../styles/getStarted.scss";
import GetStartedButton from "../getStartedButton";
import { animate, motion } from "framer-motion";
import {
  fadeInAnimationLeft,
  fadeInAnimationRight,
  fadeInAnimationUp,
} from "../../data/motion";

export default function GetStarted() {
  return (
    <div className="getStarted__container">
      <motion.h1
        className="getStarted__hdr"
        variants={fadeInAnimationRight}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <strong className="highlight">Start</strong> your Blockchain Journey
        <strong className="highlight"> Today</strong>
      </motion.h1>
      <motion.div
        className="getStarted__btn-cont"
        variants={fadeInAnimationLeft}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        <GetStartedButton />
      </motion.div>
    </div>
  );
}
