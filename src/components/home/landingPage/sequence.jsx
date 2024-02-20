import "../../../styles/sequence.scss";
import { ReactComponent as Ripple } from "../../../svg/ripple.svg";
import { ReactComponent as Ether } from "../../../svg/ethereum.svg";
import { ReactComponent as Polygon } from "../../../svg/polygon.svg";
import { ReactComponent as Avalanche } from "../../../svg/avalanche.svg";
import { ReactComponent as Corda } from "../../../svg/corda.svg";
import { ReactComponent as Binance } from "../../../svg/bsc.svg";
import { ReactComponent as Near } from "../../../svg/near.svg";
import { ReactComponent as Solana } from "../../../svg/solana.svg";
import { ReactComponent as Hyperledger } from "../../../svg/hyperledger.svg";

const Sequence = () => {
  return (
    <div className="sequence_container">
      <h2 className="sequence_text">
        A single point of truth to assess, evaluate and architect on all
        blockchains for your project or business.
      </h2>
      {/* <h1 className='sequence_hdr'>Multi-chain</h1> */}
      <div className="sequence_iconsContainer">
        <span id="bsc" className="sequence_iconContainer">
          <Binance width="100%" height="100%" fill="#ffb8f4" />
        </span>
        <span className="sequence_iconContainer">
          <Ripple width="100%" height="100%" fill="#ffb8f4" />
        </span>
        <span className="sequence_iconContainer">
          <Avalanche width="100%" height="100%" fill="#ffb8f4" />
        </span>
        <span className="sequence_iconContainer" id="hyperledger">
          <Hyperledger width="100%" height="100%" fill="#101010" />
        </span>
        <span className="sequence_iconContainer">
          <Polygon width="100%" height="100%" fill="#ffb8f4" />
        </span>
        <span id="solana" className="sequence_iconContainer">
          <Solana width="100%" height="100%" />
        </span>
        <span className="sequence_iconContainer">
          <Ether width="100%" height="100%" fill="#ffb8f4" />
        </span>
        <span className="sequence_iconContainer">
          <Corda width="80%" height="80%" fill="#fe0000" />
        </span>
        <span id="near" className="sequence_iconContainer">
          <Near width="100%" height="100%" />
        </span>
      </div>
    </div>
  );
};

export default Sequence;
