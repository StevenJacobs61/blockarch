import { useRef } from "react";
import "../../styles/userQuestions.scss";
import { add, getUserByEmail } from "../../functions/userAPI";
import { ReactComponent as Arrow } from "../../svg/arrow-back.svg";
import { useQuestions } from "../../context/questionsContext";
import Google from "./google";
import UserInputs from "./userInputs";
import { useUser } from "../../context/userContext";
import QuestionsButtons from "./questionsButtons";

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
  const { cookieLogin } = useUser();

  const other = useRef(null);

  const handleSubmit = async () => {
    if (user.confirmPassword !== user.password && !user.googleAuth) {
      setAlertMessage("Confirm password does not match!");
      setQIndex(0);
      return;
    }
    setLoading(true);
    const inUse = await isUserInUse();
    console.log(inUse);
    if (!inUse) {
      const { confirmPassword, googleAuth, ...otherUserProperties } = user;
      await addUser(otherUserProperties);
    } else {
      setLoading(false);
    }
  };

  async function isUserInUse() {
    try {
      const emailRes = await getUserByEmail(user.emailAddress);
      if (emailRes) {
        setAlertMessage("Email Address alreasy in use.");
        setQIndex(0);
        console.log({ emailRes });
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
      setUser(response.data);
      setIsHidden(true);
      setTimeout(() => {
        setIsHidden(false);
        cookieLogin();
        setSuccess(true);
        setBlock(1);
        setQIndex(0);
        setLoading(false);
      }, [200]);
      setAlertMessage("Your account was created successfully!");
    } catch (error) {
      setLoading(false);
    }
  }
  console.log(user);
  const handleGoogleAuth = (authDetails) => {
    console.log(authDetails);
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
      <div className="questions__top-cont">
        {qIndex !== 0 && !loading ? (
          <div className="questions__back-icon" onClick={() => handleIndex(0)}>
            <Arrow width="100%" height="100%" />
          </div>
        ) : null}
      </div>
      <h1 className="questions__hdr">
        {loading ? "Not long now! Please wait" : "Create a user account"}
      </h1>
      {loading ? (
        <p className="questions__loading">
          Your account is being created... This may take several minutes, do not
          referesh or leave this page.
        </p>
      ) : null}
      {alertMessage ? (
        <h3 className="questions__alert-message">{alertMessage}</h3>
      ) : null}

      <UserInputs other={other} />

      <QuestionsButtons handleSubmit={handleSubmit} handleIndex={handleIndex} />

      <Google handleGoogleAuth={handleGoogleAuth} />
    </div>
  );
};

export default UserQuestionsComp;
