import Cookies from "js-cookie";

export function logIn() {
  const loginToken = process.env.REACT_APP_LOGIN_TOKEN;
  Cookies.set("login_token", loginToken, { expires: 7 });
}
export function logOut() {
  Cookies.remove("login_token");
}
export function isLoggedIn() {
  if (Cookies.get("login_token") == process.env.REACT_APP_LOGIN_TOKEN) {
    return true;
  } else {
    return false;
  }
}
