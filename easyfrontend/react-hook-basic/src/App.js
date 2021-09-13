import React, { useState, useEffect } from 'react';
import './App.scss';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';

function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1>React Hook</h1>
      {showClock && <Clock />}
      <BetterClock />
      <button onClick={() => setShowClock(false)}>Hide clock</button>
    </div>
  );
}

export default App;
