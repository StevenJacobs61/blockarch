import React from "react";
import "../../styles/hero.scss";
import { motion } from "framer-motion";
import { BsFillLightningFill } from "react-icons/bs";
import { ReactComponent as Graphic } from "../../svg/hero-graphic4.svg";
import { fadeInAnimationDown, fadeInAnimationUp } from "../../data/motion";
import GetStarted from "./getStarted";
import GetStartedButton from "../getStartedButton";

export default function Hero() {
  return (
    <section className="hero__container">
      <article className="hero__section-cont">
        <motion.h1
          className="hero__hdr"
          initial={fadeInAnimationUp.initial}
          animate={fadeInAnimationUp.animate}
          transition={{
            delay: 0.1,
          }}
        >
          Select your{" "}
          <motion.span
            initial={fadeInAnimationUp.initial}
            animate={fadeInAnimationUp.animate}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
            className="highlight"
          >
            blockchain
          </motion.span>{" "}
          in minutes
        </motion.h1>
        <motion.h2
          className="hero__text"
          initial={fadeInAnimationDown.initial}
          animate={fadeInAnimationDown.animate}
          transition={{
            delay: 0.1,
          }}
        >
          Our{" "}
          <strong className="highlight">blockchain selection toolkit </strong>
          <strong className="highlight"> </strong>helps individuals
          <strong className="highlight"> quickly discover</strong> the
          <strong className="highlight"> most compatible </strong>technological
          <strong className="highlight"> framework </strong>for their blockchain
          <strong className="highlight"> project or</strong> business
          <strong className="highlight"> idea</strong>.
        </motion.h2>
        <motion.div
          className="hero__btn-cont"
          initial={{
            opacity: 0.01,
            y: 100,
          }}
          animate={fadeInAnimationDown.animate}
          transition={{
            delay: 0.1,
          }}
        >
          <GetStartedButton />
        </motion.div>
      </article>

      <div className="hero__section-cont">
        <motion.div
          className="hero__gfx-cont"
          initial={fadeInAnimationDown.initial}
          animate={fadeInAnimationDown.animate}
        >
          <Graphic width="100%" height="100%" />
        </motion.div>
      </div>
    </section>
  );
}
