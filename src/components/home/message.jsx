import React from "react";
import "../../styles/message.scss";
import { motion } from "framer-motion";

export default function Message() {
  const words = [
    "Blockarch",
    "demystifies",
    "the",
    "complexities",
    "of",
    "blockchain",
    "technology",
    "with",
    "a",
    "simple",
    "AI-powered",
    "matching",
    "process.",
    "We",
    "are",
    "enabling",
    "individuals",
    "to",
    "discover",
    "the",
    "most",
    "compatible",
    "blockchain",
    "for",
    "their",
    "project,",
    "without",
    "the",
    "need",
    "for",
    "coding",
    "or",
    "cryptographic",
    "expertise.",
  ];
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
    <section className="flex--col message__container">
      <div className="flex--col">
        <motion.h1
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="message__hdr hdr--md"
        >
          Blockchain should be <strong className="highlight">universal</strong>{" "}
        </motion.h1>
        <ul className="message__wrapper">
          {words.map((word, i) => (
            <motion.li
              key={i}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              className={`message__text 
              ${i === 0 || i === 18 ? "underline" : ""}
              ${
                i === 9 ||
                i === 10 ||
                i === 11 ||
                i === 12 ||
                i === 26 ||
                i === 27 ||
                i === 28 ||
                i === 29 ||
                i === 30
                  ? "highlight"
                  : ""
              }
              `}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.05 * i,
              }}
            >
              {word}
            </motion.li>
          ))}
        </ul>
      </div>
      {/* <div className="message__section flex--cen">
        <motion.div className="message__gfx-cont">
          <img src={Graphic} alt="" width={100} height={100} />
          <Graphic />
        </motion.div>
      </div> */}
    </section>
  );
}
