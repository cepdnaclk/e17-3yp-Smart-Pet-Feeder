import React from "react";
import { API_URL } from "../../configs/Configs";

export const SET_FEEDBACKS = "SET_FEEDBACKS";
export const POST_FEEDBACK_REPLY = "POST_FEEDBACK_REPLY";

export const fetchFeedbacks = () => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.token;

    const response = await fetch(API_URL + "/auth/admin/get_feedbacks", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    dispatch({ type: SET_FEEDBACKS, feedbacks: resData });
  };
};

export const feedbackReply = (id, userId, title, message) => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.token;

    const response = await fetch(API_URL + "/auth/admin/post_reply", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feedbackId: id,
        userId: userId,
        title: title,
        message: message,
      }),
    });

    const resData = await response.json();
    dispatch({
      type: POST_FEEDBACK_REPLY,
      id: id,
      reply: message,
    });
  };
};
