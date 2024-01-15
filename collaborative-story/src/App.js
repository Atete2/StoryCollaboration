import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <HomePage/>
      </div>
    </Provider>
  );
}

export default App;
