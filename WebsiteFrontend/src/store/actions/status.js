import React from "react";
import { API_URL } from "../../configs/Configs";

export const SET_STATUS = "SET_STATUS";

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
    dispatch({ type: SET_STATUS, status: resData });
  };
};
