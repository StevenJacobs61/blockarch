import React from "react";
import { useQuestions } from "../../context/questionsContext";
import { userQuestions } from "../../data/userQuestions";
import GoogleAuth from "./googleAuth";
import "../../styles/userQuestions.scss";

export default function Google({ handleGoogleAuth }) {
  const { user, setUser, qIndex } = useQuestions();
  return (
    <div className="flex--col">
      {qIndex === 0 && !user.googleAuth ? (
        <GoogleAuth handleLogin={handleGoogleAuth} />
      ) : user.googleAuth && qIndex === 0 ? (
        <h3
          className="userQuestions__logout clickable"
          onClick={() =>
            setUser(() => {
              const result = {};
              userQuestions.forEach((question) => {
                question.input.forEach((inputField) => {
                  if (inputField.field !== "finish") {
                    result[inputField.field] = null;
                  }
                });
              });
              return result;
            })
          }
        >
          Don't want to use Google Account for login? Click here!
        </h3>
      ) : null}
    </div>
  );
}
