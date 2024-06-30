import { ReactComponent as Logo } from "../../svg/logo-with-name.svg";
import "../../styles/navbar.scss";
import { ReactComponent as Linkedin } from "../../svg/linkedin.svg";
import { ReactComponent as X } from "../../svg/x.svg";
import { motion } from "framer-motion";
import { fadeInAnimationUp } from "../../data/motion";
import { useUser } from "../../context/userContext";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";

const Navbar = () => {
  const { loggedIn, pathname } = useUser();
  console.log(loggedIn);
  return (
    <header className="nav__container">
      <motion.section
        className="nav__wrapper"
        initial={fadeInAnimationUp.initial}
        animate={fadeInAnimationUp.animate}
      >
        <a href={loggedIn ? "/apps" : "/"} className="clickable nav__logo">
          <Logo width={"100%"} height={"100%"} />
        </a>
        {!loggedIn ? <SignedOutLinks /> : <SignedInLinks />}
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
      </motion.section>
    </header>
  );
};

export default Navbar;
