import React from "react";
import { API_URL } from "../../configs/Configs";

export const SET_USERS = "SET_USERS";

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token;

    const response = await fetch(API_URL + "/auth/admin/get_users", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    console.log("Users ", resData);
    dispatch({ type: SET_USERS, users: resData });
  };
};
