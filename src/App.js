import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component.jsx';

import './App.css';

const HatsPage = props => {
  console.log(props);
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
