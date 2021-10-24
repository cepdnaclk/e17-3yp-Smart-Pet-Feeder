import React from "react";
import { API_URL } from "../../configs/Configs";

export const SET_ADMIN_STATUS = "SET_ADMIN_STATUS";

export const fetchAdminStatus = () => {
  return async (dispatch, getState) => {
    const token = getState().admin_auth.token;
    const response = await fetch(API_URL + "/auth/admin/get_usersDetails", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    const resData = await response.json();
    dispatch({ type: SET_ADMIN_STATUS, status: resData });
  };
};
