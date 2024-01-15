// src/redux/reducers/userReducer.js
import { SET_USER } from '../types/userTypes'; // Update import

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: // Update action type
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
