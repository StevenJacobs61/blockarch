import React from "react";
import { isNull } from "../../functions/utility";
import { useQuestions } from "../../context/questionsContext";
import { userQuestions } from "../../data/userQuestions";

export default function UserButtons({ handleSubmit }) {
  const { user, qIndex, handleIndex, success, loading } = useQuestions();

  return (
    <>
      {!isNull(user) && qIndex === userQuestions.length - 1 ? (
        !success ? (
          <button
            className="questions_buttonChange"
            onClick={() => handleSubmit()}
            style={{
              opacity: loading ? "0.4" : "",
              pointerEvents: loading ? "none" : "auto",
            }}
          >
            {!loading ? "Submit" : <div className="spinner" />}
          </button>
        ) : (
          <p className="questions_success">Success!</p>
        )
      ) : null}
      <div className="questions_changeContainer">
        {qIndex !== userQuestions.length - 1 ? (
          <button
            className="questions_buttonChange"
            style={{
              opacity:
                qIndex === userQuestions.length - 2 && isNull(user)
                  ? "0.5"
                  : "1",
            }}
            disabled={qIndex === userQuestions.length - 2 && isNull(user)}
            onClick={() => handleIndex(1)}
          >
            Next
          </button>
        ) : null}
      </div>
    </>
  );
}
