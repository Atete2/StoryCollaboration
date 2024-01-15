// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import thunk middleware
import userReducer from './reducers/userReducer';
import storyReducer from './reducers/storyReducer';
import notificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
  user: userReducer,
  story: storyReducer,
  notification: notificationReducer,
  // Add other reducers here as your project grows
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // Apply thunk middleware

export default store;
