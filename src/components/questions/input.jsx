import React from "react";
import "../../styles/userQuestions.scss";
import "../../styles/questions.scss";

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
    <div className="userQuestions__input-cont">
      <label className="questions_label">{title}</label>
      <input
        type={type}
        ref={reff}
        name={name}
        className={
          type === "radio" ? "questions_checkbox" : "questions_textInput"
        }
        value={value}
        onChange={change}
        checked={checked}
      />
    </div>
  );
}
