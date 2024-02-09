import React from "react";
import "../../styles/hero.scss";
import { motion } from "framer-motion";
import { BsFillLightningFill } from "react-icons/bs";
import { ReactComponent as Graphic } from "../../svg/hero-graphic4.svg";

export default function Hero() {
  const animate = {
    opacity: 1,
    y: 0,
  };
  const transition = {
    delay: 0.1,
  };

  return (
    <section className="hero__container">
      <article className="hero__section-cont">
        <motion.h1
          className="hero__hdr"
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={animate}
          transition={transition}
        >
          Select your{" "}
          <motion.span
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={animate}
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
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={animate}
          transition={transition}
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
          animate={animate}
          transition={transition}
        >
          <button className="clickable btn--primary hero__btn">
            Get Started <BsFillLightningFill className="hero__icon" />
          </button>
        </motion.div>
      </article>
      <div className="hero__section-cont">
        <motion.div
          className="hero__gfx-cont"
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Graphic width="100%" height="100%" />
        </motion.div>
      </div>
    </section>
  );
}
