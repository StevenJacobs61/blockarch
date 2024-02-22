import "../styles/cardGrid.scss";

const GridCard = ({ icon, hdr, text }) => {
  return (
    <div className="gridCard_card">
      <div className="gridCard_iconContainer">{icon}</div>
      <div className="gridCard_contentsContainer">
        <h1 className="gridCard_hdr">{hdr}</h1>
        <p className="gridCard_text">{text}</p>
      </div>
    </div>
  );
};

export default GridCard;
