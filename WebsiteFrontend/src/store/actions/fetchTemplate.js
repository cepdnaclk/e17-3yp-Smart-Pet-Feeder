import { API_URL } from "../../configs/Configs";
import { authenticate, saveDataToStorage } from "./auth";

export const userFetchTemplate = async (fetchFunction, dispatch, getState) => {
  let response = await fetchFunction();

  if (!response.ok) {
    const errorResData = await response.json();
    if (errorResData.message === "JWT EXPIRED") {

      const refreshToken = getState().auth.refreshToken;
      response = await fetch(API_URL + "/auth/user/token", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + refreshToken,
          "Content-Type": "application/json",
        },
      });

      let resData = await response.json();

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
      return resData;
    } else {
      let message = "An error occurred";
      if (errorResData.message) message = errorResData.message;
      throw new Error(message);
    }
  }
  const resData = await response.json();
  return resData;
};
