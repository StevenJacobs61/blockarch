import Cookies from "js-cookie";

export function logIn() {
  Cookies.set("login_token", process.env.REACT_APP_LOGIN_TOKEN, { expires: 7 });
}
export function logOut() {
  Cookies.remove("login_token");
}
export function isLoggedIn() {
  return (
    JSON.stringify(Cookies.get("login_token")) ===
    process.env.REACT_APP_LOGIN_TOKEN
  );
}
