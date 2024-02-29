import React from "react";
import { isNull } from "../../functions/utility";
import { useQuestions } from "../../context/questionsContext";
import { userQuestions } from "../../data/userQuestions";
import { projectQuestions } from "../../data/projectQuestions";
import { useUser } from "../../context/userContext";
import "../../styles/questionsButtons.scss";

export default function QuestionsButtons({ handleSubmit, handleIndex }) {
  const { user, qIndex, success, loading, userProject } = useQuestions();
  const { loggedIn } = useUser();

  const questions = loggedIn ? projectQuestions : userQuestions;
  const obj = loggedIn ? userProject : user;
  return (
    <div className="questionsButtons__container">
      {!isNull(obj) && qIndex === questions.length - 1 ? (
        !success ? (
          <button
            className="questionsButtons__btn-change btn btn--primary"
            onClick={() => handleSubmit()}
            style={{
              opacity: loading ? "0.4" : "",
              pointerEvents: loading ? "none" : "auto",
            }}
          >
            {!loading ? "Submit" : <div className="spinner" />}
          </button>
        ) : (
          <p className="questionsButtons__text-success">Success!</p>
        )
      ) : null}
      <div className="questionsButtons__change-cont">
        {qIndex !== questions.length - 1 ? (
          <button
            className="questionsButtons__btn-change btn btn--primary"
            style={{
              opacity:
                qIndex === questions.length - 2 && isNull(obj) ? "0.5" : "1",
            }}
            disabled={qIndex === questions.length - 2 && isNull(obj)}
            onClick={() => handleIndex(1)}
          >
            Next
          </button>
        ) : null}
      </div>
    </div>
  );
}
