import React, { useState } from 'react';
import './App.css';
import OptimizedA from './session-08/Ses-08';

const App = () => {
  const [name , setName] = useState()
  const handleClick = () => {
    setName("Name")
  }
  return (
    <div className="App">
      <OptimizedA text = "Indra" />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
