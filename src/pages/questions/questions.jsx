import "../../styles/questions.scss";
import UserQuestionsComp from "../../components/questions/userQuestionsComp";
import ProjectQuestions from "../../components/questions/projectQuestions";
import Answers from "../../components/questions/answers";
import ProgressBar from "../../components/questions/progressBar";
import { useQuestions } from "../../context/questionsContext";
import { useUser } from "../../context/userContext";

const Questions = () => {
  const { block, isHidden, success, setSuccess, user, setIsHidden } =
    useQuestions();
  const { loggedIn } = useUser();
  return (
    <div className="questions__container">
      <div className="questions__questions-cont">
        <div
          className={`questions__questions-cont ${isHidden ? "fadeEffect hidden" : "fadeEffect"}`}
        >
          {success ? (
            <div className="questions__success-cont">
              <h1 className="questions__success-hdr">
                <strong className="highlight">Welcome </strong>Onbaord{" "}
                {user.firstName}!
              </h1>
              <h2 className="questions__success-text">
                Your account was created successfully.
              </h2>
              <button
                className="clickable btn btn--primary questions__success-btn"
                onClick={() => {
                  setSuccess(false);
                  setIsHidden(true);
                  setTimeout(() => {
                    setIsHidden(false);
                  }, [200]);
                }}
              >
                Start your first project
              </button>
            </div>
          ) : block === 0 && !loggedIn ? (
            <UserQuestionsComp />
          ) : (
            <ProjectQuestions />
          )}
        </div>
      </div>

      {/* <div className="questions_right">
        <div className="questions_progressContainer">
          <ProgressBar
            block={block}
            setBlock={setBlock}
            qIndex={qIndex}
            setQIndex={setQIndex}
          />
        </div>
        <div className="questions_answersContainer">
          <Answers
            qIndex={qIndex}
            setQIndex={setQIndex}
            block={block}
            setBlock={setBlock}
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Questions;
