/*
  We can use dispatch func
    - To dispatch reducer action  (Using {} brackets)
    - To execute any function after some async operation
 */

import { API_URL } from "../../configs/Configs";
export const USER_SAVE_ONETIME_TOKEN = "USER_SAVE_ONETIME_TOKEN";
export const AUTHENTICATE = "AUTHENTICATE";

// Logout action identifier
export const LOGOUT = "LOGOUT";
// let timer; // to hold timer func

export const authenticate = (userId, token, refreshToken) => {
  // Dispatching 2 actions here. (Can we implement this without dispatch ? )
  return (dispatch) => {
    // dispatch(setLogoutTimer(expiryTime));

    // Dispatch AUTHENTICATE action (To store token and id in the redux store)
    dispatch({
      type: AUTHENTICATE,
      userId: userId,
      token: token,
      refreshToken: refreshToken,
    });
  };
};

export const signup = (
  name,
  email,
  mobileNumber,
  password,
  confirmPassword
) => {
  return async (dispatch) => {
    // "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCpQbjXMSb_MTPw0_Y7h_A4jqwO-oyUqYg",

    const response = await fetch(API_URL + "/auth/user/signup", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNumber: mobileNumber,
        password: password,
        confirmPassword: confirmPassword,
        // returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResData = await response.json();

      let message = "An error occurred";
      if (errorResData.message) message = errorResData.message;
      throw new Error(message);
    }

    // const resData = await response.json();
    //
    // dispatch(
    //   authenticate(resData.userId, resData.idToken, resData.refreshToken)
    // );
    //
    // saveDataToStorage(resData.idToken, resData.userId);
  };
};

export const tryLogin = (email, password) => {
  // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCpQbjXMSb_MTPw0_Y7h_A4jqwO-oyUqYg",

  return async (dispatch) => {
    const response = await fetch(API_URL + "/auth/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        // returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResData = await response.json();

      let message = "An error occurred";
      if (errorResData.message) message = errorResData.message;
      throw new Error(message);
    }

    const resData = await response.json();
    dispatch({ type: USER_SAVE_ONETIME_TOKEN, oneTimeToken: resData.idToken });

    // dispatch(
    //   authenticate(
    //     resData.userId,
    //     resData.idToken,
    //     +parseInt(resData.expiresIn) * 1000
    //   )
    // );
    // // This is for saving expiry time (When auto login)
    //
    // const expirationDate = new Date(
    //   new Date().getTime() + +parseInt(resData.expiresIn) * 1000
    //   // new Date().getTimezoneOffset() * 60 * 1000
    // );
    // saveDataToStorage(resData.idToken, resData.userId, expirationDate);
  };
};

export const submitOTP = (otp) => {
  return async (dispatch, getState) => {
    const token = getState().auth.oneTimeToken;

    const response = await fetch(API_URL + "/auth/user/verifyLogin", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        otp: otp,
        // returnSecureToken: true,
      }),
    });

    if (!response.ok) {
      const errorResData = await response.json();

      let message = "An error occurred";
      if (errorResData.message) message = errorResData.message;
      throw new Error(message);
    }

    const resData = await response.json();
    console.log(resData);

    dispatch(
      authenticate(resData.userId, resData.idToken, resData.refreshToken)
    );

    saveDataToStorage(resData.idToken, resData.userId, resData.refreshToken);
  };
};

// Logout func
export const logout = () => {
  // clear log out timer
  // clearLogoutTimer();
  // Remove userData from mobile storage

  localStorage.removeItem("userData");

  // Dispatch LOGOUT action (No async operations, so can dispatch actions directly)
  return { type: LOGOUT };
};

// const clearLogoutTimer = () => {
//   // If timer exists, clear it
//   if (timer) {
//     clearTimeout(timer);
//   }
// };

// // Setting logout timer
// const setLogoutTimer = (expirationTime) => {
//   // This is a async operation (need dispatch callback)
//   return (dispatch) => {
//     timer = setTimeout(() => {
//       dispatch(logout()); // dispatch logout() func after expiration time
//     }, expirationTime);
//   };
// };

export const saveDataToStorage = (token, userId, refreshToken) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
      refreshToken: refreshToken,
    })
  );
};
