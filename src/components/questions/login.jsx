import React, { useEffect, useState } from "react";
import { getUserByEmail } from "../../functions/userAPI";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../functions/logIn";
import "../../styles/login.scss";
import LoadingStatus from "./loadingStatus";
import SubmitBtn from "./submitBtn";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

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

  const prepareLocalStorage = async (res) => {
    await localStorage.setItem("user", JSON.stringify(res));
    await localStorage.setItem("block", JSON.stringify(1));
    await localStorage.setItem("qIndex", JSON.stringify(0));
  };

  const handleLogin = (authData) => {
    const details = {
      emailAddress: authData.email,
      password: "google",
    };
    setActiveSubmit(true);
    setLoading(true);
    handleSubmit(details);
  };

  const handleSubmit = async (details) => {
    if (!activeSubmit) return;
    const password = details.password || loginDetails.password;
    const email = details.emailAddress || loginDetails.emailAddress;
    try {
      const res = await getUserByEmail(email);
      if (password == res.password) {
        await prepareLocalStorage(res);
        setSuccess(true);
        setLoading(false);
        setTimeout(() => {
          logIn();
          navigate("/apps");
        }, 1500);
      } else {
        setAlertMessage(
          "Password did not match. \n Please try again or create an account."
        );
      }
    } catch (err) {
      console.error(err);
      setAlertMessage(
        "Username or Password did not match. \n Please try again or create an account."
      );
    }
    setLoading(false);
  };

  return (
    <div className="login__container">
      <h1 className="login__hdr">Welcome back! Log in to Blockarch</h1>
      <div className="login__component-cont">
        <h3 className="questions_alertMessage">{alertMessage}</h3>
        <label className="questions_label">Email Address</label>
        <input
          type="text"
          className="questions_textInput"
          onChange={(e) =>
            setLoginDetails((prev) => ({
              ...prev,
              emailAddress: e.target.value,
            }))
          }
        />
        <label className="questions_label">Password</label>
        <input
          type="password"
          className="questions_textInput"
          onChange={(e) =>
            setLoginDetails((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <SubmitBtn
          handleSubmit={handleSubmit}
          activeSubmit={activeSubmit}
          loading={loading}
          success={success}
        />
        <LoadingStatus loading={loading} />
        <div className="login__or-cont">
          <div className="login__or-line" />
          <h3 className="login__or">or</h3>
          <div className="login__or-line" />
        </div>
        <div className="login__google-cont">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decodedResponse = jwtDecode(credentialResponse.credential);
              handleLogin(decodedResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
