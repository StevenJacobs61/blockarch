import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationUp } from "../../data/motion";
import { ReactComponent as Chevron } from "../../svg/chevron.svg";

export default function SignedOutLinks() {
  return (
    <motion.div
      initial={fadeInAnimationUp.initial}
      animate={fadeInAnimationUp.animate}
      className="nav__btns"
    >
      <button
        className="btn clickable nav__btn"
        onClick={() => (window.location.href = "/questions")}
      >
        Get started
        <Chevron className="nav__chevron" />{" "}
      </button>
      <button
        className="btn clickable nav__btn"
        onClick={() => (window.location.href = "/login")}
      >
        Sign in
      </button>
    </motion.div>
  );
}
