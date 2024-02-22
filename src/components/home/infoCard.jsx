import React from "react";
import "../../styles/infoCards.scss";
import { ReactComponent as Logo } from "../../svg/logo-no-text.svg";
import "../../styles/infoCard.scss";
import { motion } from "framer-motion";

export default function InfoCard({ title, text, i }) {
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
      className="infoCard__container"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      transition={
        {
          // delay: 0.3 * i + 0.2,
        }
      }
    >
      <div className="infoCard__top-cont">
        <div className="infoCard__top-half"></div>
        <div className="infoCard__bottom-half"></div>
        <div className="infoCard__icon-cont">
          <Logo width={"100%"} height={"100%"} />
        </div>
      </div>
      <article className="infoCard__content-cont">
        <h1 className="infoCard__hdr">{title}</h1>
        <p className="infoCard__text">{text}</p>
      </article>
    </motion.div>
  );
}
