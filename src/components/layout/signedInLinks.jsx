import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationUp } from "../../data/motion";

export default function SignedInLinks() {
  return (
    <motion.div
      initial={fadeInAnimationUp.initial}
      animate={fadeInAnimationUp.animate}
      className="nav__btns"
    ></motion.div>
  );
}
