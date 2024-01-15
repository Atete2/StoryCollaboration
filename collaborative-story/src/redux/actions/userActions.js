// src/redux/actions/userActions.js
import { REGISTER_USER } from '../types/userTypes';
import api from '../../services/api';

export const registerUserAsync = (user) => {
  return async (dispatch) => {
    try {
      // Dispatch an action to indicate that registration has started
      dispatch({ type: 'REGISTER_USER_START' });

      // Your async logic here, using the 'api' service
      const response = await api.registerUser(user);

      // Dispatch an action with the result
      dispatch({
        type: REGISTER_USER,
        payload: response.data,
      });

      // Dispatch an action to indicate that registration has completed
      dispatch({ type: 'REGISTER_USER_SUCCESS' });
    } catch (error) {
      // Dispatch an action if there's an error
      dispatch({
        type: 'REGISTER_USER_FAILURE',
        payload: error.message,
      });
    }
  };
};
