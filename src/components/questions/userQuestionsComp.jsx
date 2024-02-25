import { useRef, useState } from "react";
import "../../styles/userQuestions.scss";
import { add, getUserByEmail } from "../../functions/userAPI";
import { userQuestions } from "../../data/userQuestions";
import { ReactComponent as Arrow } from "../../svg/arrow-back.svg";
import { useQuestions } from "../../context/questionsContext";
import Google from "./google";
import UserInputs from "./userInputs";
import UserButtons from "./userButtons";

const UserQuestionsComp = () => {
  const {
    qIndex,
    setQIndex,
    alertMessage,
    setAlertMessage,
    user,
    setUser,
    setBlock,
    handleIndex,
    success,
    loading,
    setLoading,
    setSuccess,
    setIsHidden,
  } = useQuestions();

  const other = useRef(null);

  const handleSubmit = async () => {
    if (user.confirmPassword !== user.password && !user.googleAuth) {
      setAlertMessage("Confirm password does not match!");
      setQIndex(0);
      return;
    }
    setLoading(true);
    const inUse = await isUserInUse();
    if (!inUse) {
      const { confirmPassword, googleAuth, ...otherUserProperties } = user;
      await addUser(otherUserProperties);
    }
  };
  async function isUserInUse() {
    try {
      const emailRes = await getUserByEmail(user.emailAddress);
      if (emailRes) {
        setAlertMessage("Email Address alreasy in use.");
        setQIndex(0);
        return true;
      }
    } catch (error) {
      console.error(error);
      if (error.code == 500) {
        setAlertMessage("Email Address alreasy in use.");
        return true;
      }
    }
    return false;
  }
  async function addUser(otherUserProperties) {
    try {
      const response = await add(otherUserProperties, "/user");
      setBlock(1);
      setQIndex(0);
      setUser(response.data);
      setIsHidden(true);
      setTimeout(() => {
        setIsHidden(false);
        setSuccess(true);
      }, [200]);
      setLoading(false);
      setAlertMessage("Your account was created successfully!");
    } catch (error) {
      setLoading(false);
    }
  }

  const handleGoogleAuth = (authDetails) => {
    setUser((prev) => ({
      ...prev,
      emailAddress: authDetails.email,
      firstName: authDetails.given_name,
      lastName: authDetails.family_name,
      password: `${process.env.REACT_APP_GOOGLE_AUTH_PASSOWRD}${authDetails.email}`,
      confirmPassword: `${process.env.REACT_APP_GOOGLE_AUTH_PASSOWRD}${authDetails.email}`,
      googleAuth: true,
    }));
    setQIndex(2);
  };
  return (
    <div className={`userQuestions__container`}>
      <div className="questions_topContainer">
        {qIndex !== 0 ? (
          <div
            className="questions_arrowContainer"
            onClick={() => handleIndex(0)}
          >
            <Arrow width="100%" height="100%" />
          </div>
        ) : null}
      </div>
      <h1 className="userQuestions__hdr">
        {loading ? "Not long now! Please wait" : "Create a user account"}
      </h1>
      {loading && !success ? (
        <p className="questions_loading">
          Your Account is being created, do not leave the page...
        </p>
      ) : null}
      {alertMessage ? (
        <h3 className="questions_alertMessage">{alertMessage}</h3>
      ) : null}

      <UserInputs other={other} />

      <UserButtons handleSubmit={handleSubmit} />

      <Google handleGoogleAuth={handleGoogleAuth} />
    </div>
  );
};

export default UserQuestionsComp;
