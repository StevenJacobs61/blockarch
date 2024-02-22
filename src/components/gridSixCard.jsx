import "../styles/gridSix.scss";

const GridSixCard = ({ Icon, hdr, text }) => {
  return (
    <div className="gridSix_card">
      <div className="gridSix_left">
        <div className="gridSix_iconContainer">
          <Icon width="100%" height="100%" />
        </div>
      </div>
      <div className="gridSix_right">
        <h1 className="gridSix_hdr">{hdr}</h1>
        <p className="gridSix_text">{text}</p>
      </div>
    </div>
  );
};

export default GridSixCard;
