import { API_URL } from "../../configs/Configs";
import { authenticate, saveDataToStorage } from "./auth";

export const userFetchTemplate = async (fetchFunction, dispatch, getState) => {
  let response = await fetchFunction();

  if (!response.ok) {
    const errorResData = await response.json();
    console.log("Error data", errorResData.message);
    if (errorResData.message === "JWT EXPIRED") {
      console.log("Expired block");

      const refreshToken = getState().auth.refreshToken;
      console.log("Sending refresh token", refreshToken);
      response = await fetch(API_URL + "/auth/user/token", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + refreshToken,
          "Content-Type": "application/json",
        },
      });

      let resData = await response.json();
      console.log("new token ", resData);

      dispatch(authenticate(resData.userId, resData.idToken, refreshToken));
      saveDataToStorage(resData.idToken, resData.userId, refreshToken);

      response = await fetchFunction();
      if (!response.ok) {
        const errorResData = await response.json();

        let message = "An error occurred";
        if (errorResData.message) message = errorResData.message;
        throw new Error(message);
      }

      resData = await response.json();
      console.log("second req ", resData);
      return resData;
    } else {
      let message = "An error occurred";
      if (errorResData.message) message = errorResData.message;
      throw new Error(message);
    }
  }
  const resData = await response.json();
  console.log("first req ", resData);
  return resData;
};
