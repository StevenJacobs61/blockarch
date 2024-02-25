import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React from "react";

export default function GoogleAuth({ handleLogin }) {
  return (
    <div className="flex--col">
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
  );
}
