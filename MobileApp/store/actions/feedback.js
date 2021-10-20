import { API_URL } from "../../config/Configs";
import {userFetchTemplate} from "./fetchTemplate";
import { SET_STATUS } from "./status";


export const submitFeedback = (title, message) => {
  console.log("fetching");
  return async (dispatch, getState) => {
    const resData = await userFetchTemplate(
        // fetchStatusFunction.bind(null, dispatch, getState),
        async () => {
          const token = getState().auth.token;
          console.log("Fetsch status function ", getState().auth);

          return await fetch(API_URL + "/auth/user/post_feedback", {
            method: "POST",
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              message: message,
              date_time: new Date(),
            }),
          });
        },
        dispatch,
        getState
    );

    console.log("Last res data", resData);
    dispatch({ type: SET_STATUS, status: resData });
  };
};