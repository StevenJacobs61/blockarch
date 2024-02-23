import CardAreaTwo from "../../cardAreaTwo";
import "../../../styles/gettingStarted.scss";

const GettingStarted = () => {
  return (
    <div className="gettingStarted_container">
      <div className="gettingStarted_topContainer">
        <h1 className="gettingStarted_hdr">Getting Started</h1>
        <h2 className="gettingStarted_subtext">
          Design, develop and deploy blockchain applications with confidence
        </h2>
      </div>
      <div className="gettingStarted_contentContainer">
        <CardAreaTwo />
      </div>
    </div>
  );
};

export default GettingStarted;
