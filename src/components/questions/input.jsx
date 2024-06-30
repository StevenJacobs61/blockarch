import React from "react";
import "../../styles/userQuestions.scss";
import "../../styles/questions.scss";
import "../../styles/input.scss";

export default function Input({
  value,
  title,
  type,
  checked,
  change,
  reff,
  name,
}) {
  return (
    <div className="input__container">
      <label className="input__label">{title}</label>
      <input
        type={type}
        ref={reff}
        name={name}
        className={type === "radio" ? "input__checkbox" : "input__textbox"}
        value={value}
        onChange={change}
        checked={checked}
      />
    </div>
  );
}
