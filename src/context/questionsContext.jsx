import { createContext, useContext, useEffect, useState } from "react";
import { userQuestions } from "../data/userQuestions";

export const QuestionsContext = createContext(null);

export default function QuestionsContextProivder({ children }) {
  const [isQuestions, setIsQuestions] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [block, setBlock] = useState();
  const [qIndex, setQIndex] = useState(0);
  const [alertMessage, setAlertMessage] = useState(null);
  const [user, setUser] = useState(() => {
    if (!localStorage.getItem("user")) {
      let result = {};
      userQuestions.forEach((question) => {
        question.input.forEach((inputField) => {
          if (inputField.field !== "finish") {
            result[inputField.field] = null;
          }
        });
      });
      return result;
    } else {
      return JSON.parse(localStorage.getItem("user"));
    }
  });

  const handleIndex = (direction) => {
    if (
      qIndex === 0 &&
      direction === 1 &&
      user.confirmPassword !== user.password &&
      !user?.googleAuth
    ) {
      return setAlertMessage("Confirm password does not match!");
    } else {
      setAlertMessage("");
    }
    setIsHidden(true);
    setTimeout(() => {
      if (direction === 1) {
        setQIndex((prev) => (prev === userQuestions.length - 1 ? 0 : prev + 1));
      } else if (direction === 0) {
        setQIndex((prev) => (prev === 0 ? userQuestions.length - 1 : prev - 1));
      }
      setIsHidden(false);
    }, [200]);
  };

  useEffect(() => {
    function configBlock() {
      if (!localStorage.getItem("block") || !localStorage.getItem("user")) {
        localStorage.setItem("block", 0);
      }
      setBlock(parseInt(localStorage.getItem("block")));
    }
    function configIndex() {
      const localIndex = parseInt(localStorage.getItem("qIndex"));
      if (localIndex) {
        setQIndex(localIndex);
      }
    }
    function configUser() {
      const localUser = JSON.parse(localStorage.getItem("user"));
      console.log(localUser);
      if (localUser) {
        setUser(localUser);
      } else {
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
    configBlock();
    configIndex();
    configUser();
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) !== user)
      localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("block", JSON.stringify(block));
  }, [block]);
  useEffect(() => {
    localStorage.setItem("qIndex", JSON.stringify(qIndex));
  }, [qIndex]);

  function updateUser(newValue) {
    setUser((prev) => ({
      ...prev,
      [userQuestions[qIndex].input[0].field]: newValue,
    }));
  }

  return (
    <QuestionsContext.Provider
      value={{
        isQuestions,
        setIsQuestions,
        block,
        setBlock,
        qIndex,
        setQIndex,
        setAlertMessage,
        alertMessage,
        user,
        setUser,
        updateUser,
        handleIndex,
        isHidden,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export const useQuestions = () => {
  const questionsContext = useContext(QuestionsContext);
  if (!questionsContext) {
    throw Error("Use useQuestions inside QuestionsContextProvider");
  }
  return questionsContext;
};
