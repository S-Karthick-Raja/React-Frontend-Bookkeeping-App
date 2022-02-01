import axios from "axios";
import { API_URL } from "../../../Global-Constant/globalConstant";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_PROFILE_REQUEST,
  USER_PROFILE_SUCCESS,
  USER_PROFILE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from "../books/actionTypes";

const registerUserAction = (fname, lname, profileurl, email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      //MAKE ACTUALL CALL
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `${API_URL}/api/users/register`,
        {
          fname,
          lname,
          profileurl,
          email,
          password,
        },
        config
      );

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      //Save the user into localstorage
      localStorage.setItem("userAuthData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//Login action

const loginUserAction = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });

      //Make the actual
      const config = {
        headers: { "Content-Type": "application/json" },
      };

      const { data } = await axios.post(
        `${API_URL}/api/users/login`,
        { email, password },
        config
      );

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      //Save the user into localstorage
      localStorage.setItem("userAuthData", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//Logout action
const logoutUserAction = () => async dispatch => {
  try {
    //Remove user from storage
    localStorage.removeItem('userAuthData');
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (error) { }
};

// Profile action
// const getUserProfile = () => {
//   return async (dispatch, getState) => {
//     // Grab the user token from store
//     const { userInfo } = getState().userLogin;
//     try {
//       dispatch({
//         type: USER_PROFILE_REQUEST,
//       });
//       const config = {
//         headers: {
//           authorization: `Bearer ${userInfo.token}`,
//         },
//       };
//       // make request
//       const { data } = await axios.get(`${API_URL}/api/users/profile`, config);
//       dispatch({
//         type: USER_PROFILE_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: USER_PROFILE_FAIL,
//         payload: error.response && error.response.data.message,
//       });
//     }
//   };
// };

export const getUserProfile = () => {
  return async (dispatch, getState) => {
    const { userInfo } = getState().userLogin;
    try {
      dispatch({
        type: USER_PROFILE_REQUEST,
      });
      const config = {
        headers: {
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get(`${API_URL}/api/users/profile`, config);
      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_PROFILE_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

const updateUser = (fname, lname, profileurl, email, password) => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: USER_UPDATE_REQUEST,
        loading: true,
      });
      // Get the token of the user from store because that's what our endpoint need
      const { userInfo } = getState().userLogin;
      console.log(userInfo.token);
      //Create a config and pass to axios for authentication
      const config = {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.put(
        `${API_URL}/api/users/profile/update`,
        { fname, lname, profileurl, email, password },
        config
      );
      dispatch({
        type: USER_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export { registerUserAction, loginUserAction, logoutUserAction , updateUser };
