import "../styles/cardThree.scss";

const CardComponentThree = ({ hdr, text, Icon }) => {
  return (
    <div className="cardThree_card">
      <h1 className="cardThree_hdr">{hdr}</h1>
      <div className="cardThree_imgContainer">
        {Icon && <Icon width="100%" height="100%" />}
      </div>
      <p className="cardThree_text">{text}</p>
    </div>
  );
};

export default CardComponentThree;
