import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";
import { isLoggedIn } from "../functions/logIn";

const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);
  const [googleAuthData, setGoogleAuthData] = useState();

  function checkCookies() {
    const cookieFound = Cookies.get("login_token");
    if (cookieFound === process.env.REACT_APP_LOGIN_TOKEN) {
      setLoggedIn(true);
      return;
    }
    setLoggedIn(false);
    return;
  }
  function cookieLogin() {
    const loginToken = process.env.REACT_APP_LOGIN_TOKEN;
    Cookies.set("login_token", loginToken, { expires: 7 });
    setLoggedIn(true);
  }
  function cookieLogout() {
    Cookies.remove("login_token");
    setLoggedIn(false);
  }
  useEffect(() => {
    checkCookies();
  }, []);

  function handleLoggedIn() {
    setPathname(window.location.pathname);
    setLoggedIn(isLoggedIn());
    if (window.location.pathname === "/" && isLoggedIn()) {
      console.log("logged in");
      window.location.href = "/apps";
    } else if (
      (window.location.pathname === "/apps" ||
        window.location.pathname === "/result") &&
      !isLoggedIn()
    ) {
      window.location.href = "/login";
    }
  }

  useEffect(() => {
    handleLoggedIn();
    window.addEventListener("popstate", handleLoggedIn);
    console.log("logged in: ", isLoggedIn());
    return () => {
      window.removeEventListener("popstate", handleLoggedIn);
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        cookieLogin,
        cookieLogout,
        pathname,
        setPathname,
        googleAuthData,
        setGoogleAuthData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw Error("Use useUser inside UserContextProvider");
  }
  return userContext;
};
