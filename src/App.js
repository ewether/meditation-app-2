import React from 'react';
import Countdown from './components/Countdown';
import LoadText from './components/LoadText';
import UserOptions from './components/UserOptions';

function App() {
  return (
    <div className="container">
      <section className="main-wrapper">
          <LoadText />
          <UserOptions />
          <Countdown />
      </section>
    </div>
  );
}

export default App;
