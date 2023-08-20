import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './Demo/DemoOutput';
import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);
  console.log('APP RUNNING');

  const handleShow = useCallback(() => {
    setShowParagraph((prevState) => !prevState);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={handleShow}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
