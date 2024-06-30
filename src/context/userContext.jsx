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

  useEffect(() => {
    const handleLocationChange = () => {
      setPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handleLocationChange);
    console.log(isLoggedIn());
    if (pathname === "/" && isLoggedIn()) {
      window.location.href = "/apps";
    } else if (
      (pathname === "/apps" || pathname === "/result") &&
      !isLoggedIn()
    ) {
      window.location.href = "/login";
    }

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [pathname]);

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
