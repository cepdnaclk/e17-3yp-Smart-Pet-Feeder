import React, { useState, useEffect, useCallback } from "react";

// global object to hold the set time out func
let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// A function to calculate remaining time to expire
const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjExpirationTime = new Date(expirationTime).getTime();

  return adjExpirationTime - currentTime;
};

// We cannot just get token from the browser. We need to check expiration time also.
const retrieveStoredToken = () => {
  // get token and expiration time from the browser
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");

  // calculate the remaining time
  const remainingTime = calculateRemainingTime(storedExpirationDate);
  // console.log(remainingTime);

  // if remaining time is less than 1 min
  if (remainingTime <= 3600000) {
    // remove token and expiration time from the browser
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    // return null as the token
    return null;
  }

  // return valid token and expiration time
  return {
    token: storedToken,
    duration: remainingTime,
  };
};

// This comp will be only re-evaluated when token state changes. Token state only changed when sign up.
// If we reload the web page, then this comp will be re-evaluated.
export const AuthContextProvider = (props) => {
  // We cannot just get token from the browser. We need to check expiration time also.
  const tokenData = retrieveStoredToken();

  let initialToken;

  // If the token data is not null
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  // As a callback (Because we use this as a dependency)
  const logoutHandler = useCallback(() => {
    setToken(null);

    // Remove token and expiration time from the browser
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    // If logoutHandler setTimeOut available clear it
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    // Store the expiration time also
    localStorage.setItem("expirationTime", expirationTime);

    // calculate the remaining time to expire
    const remainingTime = calculateRemainingTime(expirationTime);

    /*
          Automatically logout after that time. If user reload the webpage This will be removed.
          So we need to setTimeout Logout func, when component re-evaluates.
         */
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  /*
      This will execute when tokenData changes
      When this comp re-evaluating token data will be updated (At least expiration time). So this will be executed.
     */
  useEffect(() => {
    // if token is not null
    if (tokenData) {
      // setTimeOut with the remaining time (When If component re evaluates, like reloading)
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  // add logoutHandler as a dependency (As a good practice)

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
