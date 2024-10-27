import React, { useState } from 'react';
import './App.css';
import XModal from './xomponents/XModal';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <button onClick={toggleModal}>Open Form</button>
      {isOpen && <XModal onClose={toggleModal} />}
    </div>
  );
};

export default App;
