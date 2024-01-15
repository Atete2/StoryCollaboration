// src/pages/HomePage/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAsync } from '../../redux/actions/userActions'; // Update import

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the action to set the user (dummy user for now)
    dispatch(registerUserAsync({ username: 'JohnDoe' })); // Update action
  }, [dispatch]);

  return (
    <div>
      <h1>Welcome to the Collaborative Story Platform!</h1>
    </div>
  );
};

export default HomePage;
