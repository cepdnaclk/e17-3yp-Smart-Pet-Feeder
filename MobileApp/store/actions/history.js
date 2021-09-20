import React from "react";
import { API_URL } from "../../config/Configs";

export const SET_HISTORY = "SET_HISTORY";

export const fetchHistory = () => {
  console.log("Fetching history");
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(API_URL + "/auth/user/get_history", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    dispatch({ type: SET_HISTORY, history: resData });
  };
};
