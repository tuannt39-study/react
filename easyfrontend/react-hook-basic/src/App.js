import React, { useState, useEffect } from 'react';
import './App.scss';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';
import Hero from './components/Hero';

function App() {
  const [showClock, setShowClock] = useState(true);
  const [count, setCount] = useState(1);
  return (
    <div className="app">
      <h1>React Hook</h1>

      {showClock && <Clock />}
      <button onClick={() => setShowClock(false)}>Hide clock</button>
      <BetterClock />
      <MagicBox />
      <Hero name='React' />
      <button onClick={() => setCount(count + 1)}>Increase</button>

    </div>
  );
}

export default App;
