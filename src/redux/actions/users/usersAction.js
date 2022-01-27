import axios from 'axios';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../books/actionTypes';

const registerUserAction = (name, email, password) => {
  return async dispatch => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      //MAKE ACTUALL CALL
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        '/api/users/register',
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
      localStorage.setItem('userAuthData', JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { registerUserAction };