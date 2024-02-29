import "../../styles/projectQuestions.scss";
import { projectQuestions } from "../../data/projectQuestions";
import { useEffect, useState } from "react";
import {
  add,
  getById,
  getUserByEmail,
  updateById,
} from "../../functions/userAPI";
import { ReactComponent as Arrow } from "../../svg/arrow-back.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { calculateAndSortResults } from "../../functions/utility";
import { getGptSummary } from "../../functions/gpt";
import { useQuestions } from "../../context/questionsContext";
import QuestionsButtons from "./questionsButtons";

const ProjectQuestions = () => {
  const {
    setBlock,
    qIndex,
    setQIndex,
    userProject,
    setUserProject,
    success,
    setSuccess,
    loading,
    setLoading,
  } = useQuestions();

  const [userProjectPurpose, setUserProjectPurpose] = useState({});
  const [purposeValue, setPurposeValue] = useState("");
  const [userProjectLanguages, setUserProjectLanguages] = useState({});
  const [languagesValue, setLanguagesValue] = useState("");
  const [userProjectIndustry, setUserProjectIndustry] = useState({});
  const [industryValue, setIndustryValue] = useState("");
  const [userProjectNetworkParticipants, setUserProjectNetworkParticipants] =
    useState({});
  const [networkValue, setNetworkValue] = useState("");
  const navigate = useNavigate();

  const findValue = (obj) => {
    const selectedValue = Object.keys(obj).find((key) => obj[key]);
    return selectedValue;
  };

  useEffect(() => {
    if (!localStorage.getItem("project")) {
      localStorage.setItem(
        "project",
        JSON.stringify({
          ...userProject,
          userProjectIndustry,
          userProjectLanguages,
          userProjectNetworkParticipants,
          userProjectPurpose,
        })
      );
    } else {
      const project = JSON.parse(localStorage.getItem("project"));
      setUserProjectIndustry({ ...project.userProjectIndustry });
      setIndustryValue(findValue({ ...project.userProjectIndustry }));
      setUserProjectLanguages({ ...project.userProjectLanguages });
      setLanguagesValue(findValue({ ...project.userProjectLanguages }));
      setUserProjectNetworkParticipants({
        ...project.userProjectNetworkParticipants,
      });
      setNetworkValue(findValue({ ...project.userProjectNetworkParticipants }));
      setUserProjectPurpose({ ...project.userProjectPurpose });
      setPurposeValue(findValue({ ...project.userProjectPurpose }));
      delete project.userProjectIndustry;
      delete project.userProjectLanguages;
      delete project.userProjectNetworkParticipants;
      delete project.userProjectPurpose;
      setUserProject({ ...project });
    }
  }, []);

  const handleIndex = (direction) => {
    localStorage.setItem(
      "project",
      JSON.stringify({
        ...userProject,
        userProjectIndustry,
        userProjectLanguages,
        userProjectNetworkParticipants,
        userProjectPurpose,
      })
    );
    let newIndex = null;
    if (direction === 1) {
      newIndex = qIndex === projectQuestions.length - 1 ? 0 : qIndex + 1;
      setQIndex(newIndex);
    } else if (direction === 0) {
      newIndex = qIndex === 0 ? projectQuestions.length - 1 : qIndex - 1;
      setQIndex(newIndex);
    }
    setBlock(projectQuestions[newIndex].block);
  };

  const handleChecked = (e) => {
    let selectedValue = e.target.value;
    const answersArray = projectQuestions[qIndex].entries;
    const result = answersArray.reduce((obj, value) => {
      obj[value] = false;
      return obj;
    }, {});
    result[selectedValue] = true;

    switch (projectQuestions[qIndex].endpoint) {
      case "user-project-network-participants":
        setUserProjectNetworkParticipants(result);
        setNetworkValue(selectedValue);
        break;
      case "user-project-industry":
        setUserProjectIndustry(result);
        setIndustryValue(selectedValue);
        break;
      case "user-project-purpose":
        setUserProjectPurpose(result);
        setPurposeValue(selectedValue);
        break;
      case "user-project-languages":
        setUserProjectLanguages(result);
        setLanguagesValue(selectedValue);
        break;
      case "user-project":
        if (
          [
            "transactionSize",
            "transactionsPerSecond",
            "transactionsPerMonth",
            "budgetAmount",
          ].includes(projectQuestions[qIndex].field)
        ) {
          selectedValue = parseInt(selectedValue);
        }
        setUserProject((prev) => ({
          ...prev,
          [projectQuestions[qIndex].field]: selectedValue,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    if (qIndex !== projectQuestions.length - 1) {
      return setQIndex(projectQuestions.length - 1);
    }
    setLoading(true);

    let userProjectId = null;
    let newProject = null;
    try {
      const userRes = await getUserByEmail(
        JSON.parse(localStorage.getItem("user")).emailAddress
      );
      let project = userProject;
      project.user = userRes;
      const addRes = await add(project, "/user-project");
      newProject = addRes.data;
      userProjectId = addRes.data.id;
    } catch (error) {
      console.error(error);
    }
    try {
      const languageRes = await add(
        { ...userProjectLanguages, userProjectId },
        "/user-project-languages"
      );
      const industryRes = await add(
        { ...userProjectIndustry, userProjectId },
        "/user-project-industry"
      );
      const participantsRes = await add(
        { ...userProjectNetworkParticipants, userProjectId },
        "/user-project-network-participants"
      );
      const purposeRes = await add(
        { ...userProjectPurpose, userProjectId },
        "/user-project-purpose"
      );
      let newData = {
        developmentLanguages: languageRes.data,
        industryUsage: industryRes.data,
        networkParticipants: participantsRes.data,
        purpose: purposeRes.data,
      };
      const projectRes = await updateById(
        { ...newProject, ...newData },
        "/user-project",
        userProjectId
      );
      const calcRes = await axios.post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/project-blockchain-result`,
        projectRes.data
      );
      const resultsRes = await getById(
        projectRes.data.id,
        "/project-blockchain-result"
      );
      const sortedResults = calculateAndSortResults(resultsRes);
      let gptRes = await getGptSummary(sortedResults);
      const finalProjectRes = await updateById(
        { ...projectRes.data, summary: gptRes },
        "/user-project",
        userProjectId
      );
      localStorage.setItem("project", JSON.stringify(finalProjectRes.data));
      localStorage.setItem("results", JSON.stringify(resultsRes));
      localStorage.setItem("block", 1);
      localStorage.removeItem("qIndex");
      setSuccess(true);
      setTimeout(() => {
        navigate("/apps/result");
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("project")) !== userProject) {
      localStorage.setItem(
        "project",
        JSON.stringify({
          ...userProject,
          userProjectIndustry,
          userProjectLanguages,
          userProjectNetworkParticipants,
          userProjectPurpose,
        })
      );
    }
  }, [qIndex]);

  return (
    <div className="projectQuestions__container">
      <div className="questions_topContainer">
        <div className="questions__back-icon" onClick={() => handleIndex(0)}>
          <Arrow width="100%" height="100%" />
        </div>
      </div>
      <h1 className="questions_hdr">{projectQuestions[qIndex].title}</h1>
      <div className="projectQuestions_questionsContainer">
        {projectQuestions[qIndex].subtext ? (
          <h2 className="questions_questionsTitle">
            {projectQuestions[qIndex].subtext}
          </h2>
        ) : null}
        {projectQuestions[qIndex].type === "text" ||
        projectQuestions[qIndex].type === "number" ? (
          <input
            type={projectQuestions[qIndex].type}
            className="questions_textInput"
            onChange={(e) => {
              const value =
                projectQuestions[qIndex].type === "number"
                  ? parseFloat(e.target.value)
                  : e.target.value;
              setUserProject((prev) => ({
                ...prev,
                [projectQuestions[qIndex].field]: value == null ? null : value,
              }));
            }}
            value={
              userProject[projectQuestions[qIndex].field] === null ||
              userProject[projectQuestions[qIndex].field] === undefined
                ? ""
                : userProject[projectQuestions[qIndex].field]
            }
          />
        ) : projectQuestions[qIndex].type === "radio" ? (
          projectQuestions[qIndex].answers.map((ans, i) => {
            let val = projectQuestions[qIndex].entries[i];

            return (
              <div className="projectQuestions_inputContainer" key={i}>
                <label className="questions_label" htmlFor={`answer-${qIndex}`}>
                  {ans}
                </label>
                <input
                  type="radio"
                  name={`answer-${qIndex}`}
                  className="questions_checkbox"
                  value={val}
                  onChange={(e) => handleChecked(e)}
                  checked={
                    projectQuestions[qIndex].endpoint ===
                    "user-project-network-participants"
                      ? val === networkValue
                      : projectQuestions[qIndex].endpoint ===
                          "user-project-industry"
                        ? val === industryValue
                        : projectQuestions[qIndex].endpoint ===
                            "user-project-purpose"
                          ? val === purposeValue
                          : projectQuestions[qIndex].endpoint ===
                              "user-project-languages"
                            ? val === languagesValue
                            : projectQuestions[qIndex].endpoint ===
                                "user-project"
                              ? userProject[projectQuestions[qIndex].field] ===
                                val
                              : false
                  }
                />
              </div>
            );
          })
        ) : (
          projectQuestions[qIndex].field !== "finish" && (
            <div className="projectQuestions_container">
              <label className="questions_label">Yes</label>
              <input
                type="radio"
                name={`answer-${qIndex}`}
                className="questions_checkbox"
                value={true}
                onChange={() =>
                  setUserProject((prev) => ({
                    ...prev,
                    [projectQuestions[qIndex].field]: true,
                  }))
                }
                checked={
                  userProject[projectQuestions[qIndex].field] === true
                    ? true
                    : false
                }
              />
              <label className="questions_label">No</label>
              <input
                type="radio"
                name={`answer-${qIndex}`}
                className="questions_checkbox"
                value={false}
                onChange={() =>
                  setUserProject((prev) => ({
                    ...prev,
                    [projectQuestions[qIndex].field]: false,
                  }))
                }
                checked={
                  userProject[projectQuestions[qIndex].field] === false
                    ? true
                    : false
                }
              />
            </div>
          )
        )}
        {loading && !success ? (
          <p className="questions_loading">
            Please wait, your results are being calculated...
          </p>
        ) : null}
        <QuestionsButtons
          handleSubmit={handleSubmit}
          handleIndex={handleIndex}
        />
      </div>
    </div>
  );
};

export default ProjectQuestions;
