import React from "react";
import { API_URL } from "../../configs/Configs";

export const SET_USERS = "SET_USERS";

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(API_URL + "/auth/user/get_status", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    dispatch({ type: SET_USERS, status: resData });
  };
};
