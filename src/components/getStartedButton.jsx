import React from "react";
import "../styles/getStartedButton.scss";
import { BsFillLightningFill } from "react-icons/bs";

export default function GetStartedButton() {
  return (
    <button
      className="clickable btn--primary getStartedButton__btn"
      onClick={() => (window.location.href = "/login")}
    >
      Get Started <BsFillLightningFill className="getStartedButton__icon" />
    </button>
  );
}
