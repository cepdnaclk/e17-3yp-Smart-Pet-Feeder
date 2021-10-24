import React from "react";
import {API_URL} from "../../configs/Configs";
import {userFetchTemplate} from "./fetchTemplate";

export const SET_STATUS = "SET_STATUS";

export const fetchStatus = () => {
    return async (dispatch, getState) => {
        const resData = await userFetchTemplate(
            async () => {
                const token = getState().auth.token;

                return await fetch(API_URL + "/auth/user/get_status", {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
            },
            dispatch,
            getState
        );

        dispatch({type: SET_STATUS, status: resData});
    };
};
