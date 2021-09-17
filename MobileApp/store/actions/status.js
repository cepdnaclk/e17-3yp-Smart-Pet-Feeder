import React from "react";

export const SET_STATUS = "SET_STATUS";
import { API_URL } from "../../config/Configs";

export const fetchStatus = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(API_URL + "/auth/user/get_status", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    console.log(resData);
    dispatch({ type: SET_STATUS, status: resData });
  };
};
