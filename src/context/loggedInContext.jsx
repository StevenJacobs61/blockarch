import { createContext, useEffect, useState } from "react";

export const LoggedInContext = createContext(null);

export default function LoggedInContextProivder({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </LoggedInContext.Provider>
  );
}
