import { ReactComponent as Logo } from "../../svg/logo-with-name.svg";
import "../../styles/homeBar.scss";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Menu } from "../../svg/menu.svg";
import { ReactComponent as Chevron } from "../../svg/chevron-right.svg";
import { ReactComponent as Cross } from "../../svg/cross.svg";
import { ReactComponent as Linkedin } from "../../svg/linkedin.svg";
import { ReactComponent as X } from "../../svg/x.svg";
import { clearLocalData } from "../../functions/utility";
import { motion } from "framer-motion";

const HomeBar = () => {
  const navigate = useNavigate();

  return (
    <section className="nav__container">
      <motion.div
        className="nav__wrapper"
        initial={{
          opacity: 0,
          translateY: -100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
      >
        <a href="/" className="clickable nav__logo">
          <Logo />
        </a>
        <motion.div
          initial={{
            opacity: 0,
            translateY: -100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          className="nav__btns"
        >
          <button
            className="btn clickable nav__btn"
            onClick={() => navigate("/apps/questions")}
          >
            Getting started
            <Chevron className="nav__chevron" />{" "}
          </button>
          <button
            className="btn clickable nav__btn"
            onClick={() => navigate("/apps/questions/login")}
          >
            Sign in
          </button>
        </motion.div>
        <article className="nav__socials">
          <a
            href="https://twitter.com/blockarch_?s=11&t=sMO7Csa0LziSjQLf0Vw4mg"
            className="clickable nav__social"
          >
            <X />
          </a>
          <a
            href="https://www.linkedin.com/company/blockarchio/"
            className="clickable nav__social"
          >
            <Linkedin width={100} height={100} />
          </a>
        </article>
      </motion.div>
    </section>
  );
};

export default HomeBar;
