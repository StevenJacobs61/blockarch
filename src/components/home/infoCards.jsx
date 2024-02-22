import React, { useState } from "react";
import MainCard from "./mainCard";
import InfoCard from "./infoCard";
import "../../styles/infoCards.scss";
import { motion } from "framer-motion";

const data = [
  {
    title: "Reduce Knowledge Gap",
    text: "We're making blockchain universal by providing tailored education, recommendations and tools to empower blockchain projects.",
  },
  {
    title: "Accelerate Development",
    text: "Rapid end-to-end design, development and deployment cycles by simplifying the early design and decision stages.",
  },
  {
    title: "Cost-Effective",
    text: "Blockarch removes heavy lifting in the decision-phase, where knowledge gaps and limited resources act as barriers to design and development stages.",
  },
];

export default function InfoCards() {
  const [click, setClick] = useState(data.length - 1);

  const handleClick = (direction) => {
    if (direction > 0) {
      setClick((prev) => (prev >= data.length - 1 ? 0 : prev + 1));
    }
    if (direction < 0) {
      setClick((prev) => (prev <= 0 ? data.length - 1 : prev - 1));
    }
  };

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
    <section className="infoCards__container">
      <div className="infocards__cards-cont">
        <MainCard handleClick={handleClick} />
        <div className="infoCards__card-cont">
          {data.map((card, i) => (
            <>
              {click !== i ? (
                <div key={i}>
                  <InfoCard title={card.title} text={card.text} i={i} />
                </div>
              ) : null}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
