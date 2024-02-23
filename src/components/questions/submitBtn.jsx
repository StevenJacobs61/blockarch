import React from "react";

export default function SubmitBtn({
  handleSubmit,
  success,
  activeSubmit,
  loading,
}) {
  return (
    <div className="submitBtn__container">
      {success ? (
        <p className="submitBtn__success btn clickable btn--primary">
          Success!
        </p>
      ) : (
        <button
          className="submitbtn__btn clickable btn btn--primary"
          style={{
            opacity: activeSubmit && !loading ? "" : "0.3",
            cursor: activeSubmit && !loading ? "" : "unset",
            color: activeSubmit && !loading ? "" : "#FF06D7",
            background: activeSubmit && !loading ? "" : "#fff",
            pointerEvents: loading ? "none" : "auto",
          }}
          onClick={() => handleSubmit()}
        >
          {loading ? <div className="spinner" /> : "Submit"}
        </button>
      )}
    </div>
  );
}
