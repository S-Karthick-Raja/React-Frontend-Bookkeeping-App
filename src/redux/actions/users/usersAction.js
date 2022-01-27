import axios from "axios";
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
} from "../books/actionTypes";

const registerUserAction = (name, email, password) => {
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
        "/api/users/register",
        {
          name,
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
        "/api/users/login",
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
const getUserProfileAction = () => {
  return async (dispatch, getState) => {
    // Grab the user token from store

    const {userInfo} = getState().userLogin;
    try {
      dispatch({
        type: USER_PROFILE_REQUEST,
      });
      const config = {
        header : {
          authorization : `Bearer ${userInfo.token}`
        }
      }
      // make request
      const data = await axios.get('/api/users/profile', config);
      dispatch({
        type: USER_PROFILE_SUCCESS,
        payload : data,
      })
    } catch (error) {
      dispatch({
        type : USER_PROFILE_FAIL,
        payload : error.response && error.response.data.message,
      })
    }
  }
}
export { registerUserAction, loginUserAction, logoutUserAction, getUserProfileAction };
