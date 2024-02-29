import { createContext, useContext, useEffect, useState } from "react";
import { userQuestions } from "../data/userQuestions";
import { projectQuestions } from "../data/projectQuestions";

export const QuestionsContext = createContext(null);

export default function QuestionsContextProivder({ children }) {
  const [isQuestions, setIsQuestions] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [block, setBlock] = useState(0);
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
  const [userProject, setUserProject] = useState(
    initializeUserProjectFields(projectQuestions)
  );

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
        localStorage.setItem("block", "0");
      } else {
        const localBlock = parseInt(localStorage.getItem("block"));
        setBlock(localBlock);
      }
    }
    function configIndex() {
      const localIndex = parseInt(localStorage.getItem("qIndex"));
      if (localIndex) {
        setQIndex(localIndex);
      }
    }
    function configUser() {
      const localUser = JSON.parse(localStorage.getItem("user"));
      if (localUser) {
        setUser(localUser);
      } else {
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
    function configUserProject() {
      const localProject = JSON.parse(localStorage.getItem("project"));
      if (localProject) {
        setUserProject(localProject);
      } else {
        localStorage.setItem("project", JSON.stringify(userProject));
      }
    }
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserProject((prev) => ({ ...prev, user: user }));
    }
    configBlock();
    configIndex();
    configUser();
    configUserProject();
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user")) !== user)
      localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("block")) !== block)
      localStorage.setItem("block", JSON.stringify(block));
  }, [block]);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("qIndex")) !== qIndex)
      localStorage.setItem("qIndex", JSON.stringify(qIndex));
  }, [qIndex]);

  function updateUser(newValue) {
    setUser((prev) => ({
      ...prev,
      [userQuestions[qIndex].input[0].field]: newValue,
    }));
  }
  function initializeUserProjectFields(questions) {
    return questions
      .filter((question) => question.endpoint === "user-project")
      .reduce((obj, question) => {
        obj[question.field] = null;
        return obj;
      }, {});
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
        setIsHidden,
        setLoading,
        loading,
        setSuccess,
        success,
        userProject,
        setUserProject,
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
