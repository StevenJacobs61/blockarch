import "../../styles/footer.scss";
import { ReactComponent as Logo } from "../../svg/logo-no-text.svg";

const Footer = () => {
  return (
    <div className="footer_container">
      <h1 className="info_hdr">
        Start Bridging The Startup Technology Gap Today
      </h1>
      <div className="footer_captureContainer"></div>
      <span className="footer_iconContainer">
        <Logo width="100%" height="100%" />
      </span>
      <p
        className="info_subtext"
        style={{ color: "#3F3f3f", fontWeight: "600" }}
      >
        Sign up for early access. Join hundreds of entrepreneurs today and start
        architecting.
      </p>
      <p className="footer_copyright">
        © 2023 BlockArch. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
