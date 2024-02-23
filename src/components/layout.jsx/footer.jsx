import "../../styles/footer.scss";
import { ReactComponent as X } from "../../svg/x.svg";
import { ReactComponent as LinkedIn } from "../../svg/linkedin.svg";
import { motion } from "framer-motion";
import { fadeInAnimationDown } from "../../data/motion";

const Footer = () => {
  return (
    <motion.div
      className="footer__container"
      variants={fadeInAnimationDown}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="footer__links-cont">
        <motion.a
          href="https://twitter.com/blockarch_?s=11&t=sMO7Csa0LziSjQLf0Vw4mg"
          variants={fadeInAnimationDown}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.03,
          }}
          className="footer__link-cont clickable"
        >
          <X width="100%" height="100%" className="footer__link" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/company/blockarchio/"
          className="footer__link-cont clickable"
          variants={fadeInAnimationDown}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
          }}
        >
          <LinkedIn width="100%" height="100%" className="footer__link" />
        </motion.a>
      </div>
      <h1 className="footer__copyright">
        © 2023 BlockArch. All rights reserved.
      </h1>
    </motion.div>
  );
};

export default Footer;
