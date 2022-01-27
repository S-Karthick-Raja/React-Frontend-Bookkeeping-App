import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
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


export { registerUserAction,loginUserAction };
