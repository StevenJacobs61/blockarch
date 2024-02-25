import React from "react";
import "../../styles/login.scss";

export default function LoadingStatus({ loading }) {
  const handleNewAcount = () => {
    localStorage.removeItem("user");
    window.location.href = "/questions";
  };
  return !loading ? (
    <h3 className="loadingStatus__hdr" onClick={() => handleNewAcount()}>
      Don't have an account yet? Create one here!
    </h3>
  ) : (
    <p className="loadingStatus__text">
      Please wait, your data is being retrieved...
    </p>
  );
}
