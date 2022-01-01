import { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button'
import MyParagraph from './components/Demo/MyParagraph';
import './App.css';

function App() {
  const [showPragraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  const toggleParragraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph(prevState => !prevState)
    }
  }, [allowToggle])
  const allowToggleHandler = () => {
    setAllowToggle(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <MyParagraph show={showPragraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParragraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
