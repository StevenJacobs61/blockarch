import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../../functions/userAPI";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../functions/logIn";
import "../../styles/login.scss";
import LoadingStatus from "./loadingStatus";
import SubmitBtn from "./submitBtn";
import GoogleAuth from "./googleAuth";
import Input from "./input";

const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    emailAddress: null,
    password: null,
  });
  const [activeSubmit, setActiveSubmit] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    Object.values(loginDetails).every((value) => value)
      ? setActiveSubmit(true)
      : setActiveSubmit(false);
  }, [loginDetails]);

  const handleLogin = async (authData) => {
    const details = {
      emailAddress: authData.email,
      password: `${process.env.REACT_APP_GOOGLE_AUTH_PASSOWRD$}${authData.email}`,
    };
    setActiveSubmit(true);
    setLoading(true);
    handleSubmit(details, true);
  };

  const handleSubmit = async (details, active) => {
    if (!activeSubmit && !active) return;
    const password = details.password || loginDetails.password;
    const email = details.emailAddress || loginDetails.emailAddress;
    try {
      const res = await getUserByEmail(email);
      if (password == res.password) {
        finalizeLogin(res);
      } else {
        setAlertMessage(
          "Password did not match. \n Please try again or create an account."
        );
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setAlertMessage(
        "Username or Password did not match. \n Please try again or create an account."
      );
      setLoading(false);
    }
    setLoading(false);
    return;
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
    }, 1500);
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
        {!loading ? (
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
        <LoadingStatus loading={loading} />
        <GoogleAuth handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
