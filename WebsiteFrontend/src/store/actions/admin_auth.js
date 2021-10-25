import { API_URL } from "../../configs/Configs";

export const AUTHENTICATE_ADMIN = "AUTHENTICATE_ADMIN";
export const LOGOUT_ADMIN = "LOGOUT_ADMIN";
export const SAVE_ONETIME_TOKEN = "SAVE_ONETIME_TOKEN";
let timer; // to hold timer func

export const authenticate = (userId, token, expiryTime) => {
  // Dispatching 2 actions here. (Can we implement this without dispatch ? )
  return (dispatch) => {
    dispatch(setLogoutTimer(expiryTime));

    // Dispatch AUTHENTICATE action (To store token and id in the redux store)
    dispatch({ type: AUTHENTICATE_ADMIN, userId: userId, token: token });
  };
};

export const tryLogin = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(API_URL + "/auth/admin/login", {
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

    dispatch({ type: SAVE_ONETIME_TOKEN, oneTimeToken: resData.idToken });

    // dispatch(
    //     authenticate(
    //         resData.userId,
    //         resData.idToken,
    //         +parseInt(resData.expiresIn) * 1000
    //     )
    // );
    // // This is for saving expiry time (When auto login)
    //
    // const expirationDate = new Date(
    //     new Date().getTime() + +parseInt(resData.expiresIn) * 1000
    //     // new Date().getTimezoneOffset() * 60 * 1000
    // );
    // saveDataToStorage(resData.idToken, resData.userId, expirationDate);
  };
};

export const submitOTP = (otp) => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.oneTimeToken;
    const response = await fetch(API_URL + "/auth/admin/verifyLogin", {
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

    dispatch(
      authenticate(
        resData.userId,
        resData.idToken,
        +parseInt(resData.expiresIn) * 1000
      )
    );
    // This is for saving expiry time (When auto login)

    const expirationDate = new Date(
      new Date().getTime() + +parseInt(resData.expiresIn) * 1000
      // new Date().getTimezoneOffset() * 60 * 1000
    );
    saveDataToStorage(resData.idToken, resData.userId, expirationDate);
  };
};

// Logout func
export const logout = () => {
  // clear log out timer
  clearLogoutTimer();
  // Remove userData from mobile storage

  localStorage.removeItem("adminData");

  // Dispatch LOGOUT action (No async operations, so can dispatch actions directly)
  return { type: LOGOUT_ADMIN };
};

const clearLogoutTimer = () => {
  // If timer exists, clear it
  if (timer) {
    clearTimeout(timer);
  }
};

// Setting logout timer
const setLogoutTimer = (expirationTime) => {
  // This is a async operation (need dispatch callback)
  return (dispatch) => {
    timer = setTimeout(() => {
      dispatch(logout()); // dispatch logout() func after expiration time
    }, expirationTime);
  };
};

const saveDataToStorage = (token, userId, expirationDate) => {
  localStorage.setItem(
    "adminData",
    JSON.stringify({
      token: token,
      userId: userId,
      expiryDate: expirationDate.toISOString(),
    })
  );
};
