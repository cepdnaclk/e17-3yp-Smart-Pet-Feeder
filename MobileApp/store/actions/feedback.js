import { API_URL } from "../../config/Configs";
import {userFetchTemplate} from "./fetchTemplate";
import { SET_STATUS } from "./status";


export const submitFeedback = (title, message) => {
  return async (dispatch, getState) => {
    const resData = await userFetchTemplate(
        // fetchStatusFunction.bind(null, dispatch, getState),
        async () => {
          const token = getState().auth.token;

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

    dispatch({ type: SET_STATUS, status: resData });
  };
};