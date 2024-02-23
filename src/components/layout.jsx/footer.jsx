import "../../styles/footer.scss";
import { ReactComponent as X } from "../../svg/x.svg";
import { ReactComponent as LinkedIn } from "../../svg/linkedin.svg";
import { motion } from "framer-motion";
import { fadeInAnimationDown, fadeInAnimationUp } from "../../data/motion";

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
        <motion.span
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
        </motion.span>
        <motion.span
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
        </motion.span>
      </div>
      <h1 className="footer__copyright">
        © 2023 BlockArch. All rights reserved.
      </h1>
    </motion.div>
  );
};

export default Footer;
