import React from "react";
import { userQuestions } from "../../data/userQuestions";
import { useQuestions } from "../../context/questionsContext";
import Input from "./input";
import { useNavigate } from "react-router-dom";

const qIndexThree = ["Personal", "Corporate"];
const qIndexFour = ["Developer", "Tech Lead", "CEO", "CTO"];

export default function UserInputs({ other }) {
  const { qIndex, updateUser, user, setUser, loading } = useQuestions();
  const navigate = useNavigate();

  function validateInput(newValue, input) {
    if (
      user.googleAuth &&
      input.field === "emailAddress" &&
      window.confirm(
        "By altering this email address, you will be logged out of using google sign. Do you wish to continue?"
      )
    ) {
      updateUser(null);
    }
    if (
      ((newValue === "" || /^\+?\d*$/.test(newValue)) && qIndex === 2) ||
      qIndex !== 2
    ) {
      const value = input.type === "number" ? parseInt(newValue) : newValue;
      setUser((prev) => ({
        ...prev,
        [input.field]: value,
      }));
    }
  }
  return (
    <div className="userQuestions__questions-cont">
      {!loading ? (
        <>
          <h2 className="userQuestions__question-title">
            {userQuestions[qIndex].title}
          </h2>
          <h3 className="userQuestions__subtext">
            {userQuestions[qIndex].subtext}
          </h3>
        </>
      ) : null}

      {qIndex === 3 ? (
        qIndexThree.map((input, i) => (
          <Input
            key={input}
            value={input}
            title={input}
            type={"radio"}
            checked={user.accountType === input}
            change={(e) => updateUser(e.target.value)}
          />
        ))
      ) : qIndex === 4 ? (
        <>
          {qIndexFour.map((input, i) => (
            <Input
              key={input}
              value={input}
              title={input}
              type={"radio"}
              checked={user[userQuestions[qIndex].input[0].field] === input}
              change={(e) => updateUser(e.target.value)}
            />
          ))}
          <Input
            title={"Other? please specify!"}
            type={"text"}
            reff={other}
            change={(e) => {
              const inputValue = e.target.value;
              const maxLength = 50;
              if (inputValue.length <= maxLength) {
                updateUser(inputValue);
              }
            }}
          />
        </>
      ) : userQuestions[qIndex].title !== "Submit your answers" ? (
        user.googleAuth && qIndex === 0 ? (
          <h1 className="userQuestions__auth-message">
            <strong className="highlight">Welcome {user.firstName}!</strong>{" "}
            Logged on with {user.emailAddress}
          </h1>
        ) : (
          userQuestions[qIndex].input.map((input, i) => (
            <Input
              key={i}
              title={input.title}
              value={user[input.field] || ""}
              type={input.type}
              change={(e) => validateInput(e.target.value, input)}
            />
          ))
        )
      ) : null}
      {qIndex === 0 ? (
        <p className="userQuestions__login" onClick={() => navigate("/login")}>
          Already have an account?
          <br /> Login here!
        </p>
      ) : null}
    </div>
  );
}
