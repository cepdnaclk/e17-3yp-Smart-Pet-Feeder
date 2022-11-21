import {userFetchTemplate} from "./fetchTemplate";
import {API_URL} from "../../config/Configs";

export const fetchImage = () => {
    return async (dispatch, getState) => {
        const resData = await userFetchTemplate(
            // fetchStatusFunction.bind(null, dispatch, getState),
            async () => {
                const token = getState().auth.token;

                return await fetch(API_URL + "/auth/user/get_image", {
                    method: "GET",
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
            },
            dispatch,
            getState
        );
    };
};