import { API_URL } from "../../configs/Configs";

export const sendFeedback = (title, message) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(API_URL + "/auth/user/post_feedbacks", {
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

    const resData = await response.json();
    console.log("Submit feedback response ", resData);
  };
};
