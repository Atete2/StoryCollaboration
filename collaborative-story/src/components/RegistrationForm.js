// RegistrationForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAsync } from '../redux/actions/userActions';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  // Add more registration fields as needed
  const dispatch = useDispatch();

  const handleRegister = () => {
    // Validate input
    if (username.trim() === '') {
      alert('Please enter a valid username.');
      return;
    }

    // Dispatch async action to register user
    dispatch(registerUserAsync({ username }));
  };

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      {/* Add more registration fields */}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegistrationForm;
