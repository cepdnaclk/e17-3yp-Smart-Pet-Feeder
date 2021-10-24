import { API_URL } from "../../configs/Configs";
import { userFetchTemplate } from "./fetchTemplate";
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

export const submitAdminMessage = (email, title, message) => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.token;
    // const response = await fetch(API_URL + "/auth/user/post_feedback", {
    //   method: "POST",
    //   headers: {
    //     Authorization: "Bearer " + token,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     title: title,
    //     message: message,
    //   }),
    // });
    //
    // if (!response.ok) {
    //   const errorResData = await response.json();
    //
    //   let message = "An error occurred";
    //   if (errorResData.message) message = errorResData.message;
    //   throw new Error(message);
    // }
    //
    // const resData = await response.json();
  };
};

export const submitAdminBroadcast = (title, message) => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.token;
    // const response = await fetch(API_URL + "/auth/user/post_feedback", {
    //   method: "POST",
    //   headers: {
    //     Authorization: "Bearer " + token,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     message: message,
    //   }),
    // });
    //
    // if (!response.ok) {
    //   const errorResData = await response.json();
    //
    //   let message = "An error occurred";
    //   if (errorResData.message) message = errorResData.message;
    //   throw new Error(message);
    // }
    //
    // const resData = await response.json();
  };
};
