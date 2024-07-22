import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../../functions/userAPI";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../functions/logIn";
import "../../styles/login.scss";
import LoadingStatus from "./loadingStatus";
import SubmitBtn from "./submitBtn";
import GoogleAuth from "./googleAuth";
import Input from "./input";
import { useQuestions } from "../../context/questionsContext";
import { useUser } from "../../context/userContext";

const Login = () => {
  const navigate = useNavigate();
  const { success, setSuccess, loading, setLoading, setUser } = useQuestions();
  const { setGoogleAuthData, googleAuthData } = useUser();
  const [loginDetails, setLoginDetails] = useState({
    emailAddress: null,
    password: null,
  });
  const [activeSubmit, setActiveSubmit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    Object.values(loginDetails).every((value) => value)
      ? setActiveSubmit(true)
      : setActiveSubmit(false);
  }, [loginDetails]);

  const handleLogin = async (authData) => {
    console.log(authData);
    // DELETE!!!
    setGoogleAuthData(authData);
    const details = {
      emailAddress: authData.email,
      password: `${process.env.REACT_APP_GOOGLE_AUTH_PASSOWRD}${authData.email}`,
    };
    console.log({ details });
    // DELETEEE
    setActiveSubmit(true);
    setLoading(true);
    handleSubmit(details, true);
  };

  const handleSubmit = async (details, active) => {
    if (!activeSubmit && !active) return;
    const password = details.password || loginDetails.password;
    const email = details.emailAddress || loginDetails.emailAddress;
    const res = await getUserByEmail(email);
    if (res === 404) {
      setAlertMessage(
        "Password did not match. \n Please try again or create an account."
      );
      setLoading(false);
      return;
    } else if (password == res.password) {
      setUser(res);
      finalizeLogin(res);
    }
    setLoading(false);
  };

  const finalizeLogin = (res) => {
    localStorage.setItem("user", JSON.stringify(res));
    localStorage.setItem("block", JSON.stringify(1));
    localStorage.setItem("qIndex", JSON.stringify(0));
    setSuccess(true);
    setLoading(false);
    setTimeout(() => {
      logIn();
      navigate("/apps");
    }, 1000);
  };

  function handleChange(e) {
    e.preventDefault();
    setLoginDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div className="login__container">
      <h1 className="login__hdr">Welcome back! Log in to Blockarch</h1>
      <div className="login__component-cont">
        <h3 className="login__alert-message">{alertMessage}</h3>
        {!loading && !success ? (
          <>
            <Input
              name={"emailAddress"}
              type={"text"}
              change={(e) => handleChange(e)}
              title={"Email Address"}
            />
            <Input
              name={"password"}
              type={"password"}
              change={(e) => handleChange(e)}
              title={"Password"}
            />
          </>
        ) : null}

        <SubmitBtn
          handleSubmit={handleSubmit}
          activeSubmit={activeSubmit}
          loading={loading}
          success={success}
        />
        {!success ? (
          <>
            <GoogleAuth handleLogin={handleLogin} />
            <LoadingStatus loading={loading} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Login;
