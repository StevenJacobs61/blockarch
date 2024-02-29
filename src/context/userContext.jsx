import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext(null);

export default function UserContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

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
  return (
    <UserContext.Provider
      value={{ loggedIn, setLoggedIn, cookieLogin, cookieLogout }}
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
