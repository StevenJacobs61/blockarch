import "../../styles/questions.scss";
import UserQuestionsComp from "../../components/questions/userQuestionsComp";
import ProjectQuestions from "../../components/questions/projectQuestions";
import Answers from "../../components/questions/answers";
import ProgressBar from "../../components/questions/progressBar";
import { useQuestions } from "../../context/questionsContext";

const Questions = () => {
  const { block, isHidden } = useQuestions();

  return (
    <div className="questions__container">
      <div className="questions__questions-cont">
        <div
          className={`questions__questions-cont ${isHidden ? "fadeEffect hidden" : "fadeEffect"}`}
        >
          {!block ? <UserQuestionsComp /> : <ProjectQuestions />}
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
