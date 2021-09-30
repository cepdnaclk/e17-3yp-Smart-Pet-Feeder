import React from "react";
import { API_URL } from "../../configs/Configs";

export const SET_USERS = "SET_USERS";
export const POST_ACTIVE_STATUS = "POST_ACTIVE_STATUS";

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.token;

    const response = await fetch(API_URL + "/auth/admin/get_users", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    dispatch({ type: SET_USERS, users: resData });
  };
};

export const postActiveStatus = (id, status) => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.token;
    const response = await fetch(API_URL + "/auth/admin/post_ActiveStatus", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        isActive: status,
      }),
    });

    const resData = await response.json();
    dispatch({ type: POST_ACTIVE_STATUS, id: id });
  };
};
