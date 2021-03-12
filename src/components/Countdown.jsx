import React, { useState, useRef } from "react";
// import { FaTimes } from 'react-icons/fa'
import { library } from '@fortawesome/fontawesome-svg-core'

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function Countdown({count}) {
  console.log("count", count);
  const [timeLeft, setTimeLeft] = useState({count} * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  function startTimer() {
    if (intervalRef.current !== null) {
      return;
    }
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) return timeLeft - 1;
        resetTimer();
        return 0;
      });
    }, 1000);
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(25 * 60);
    setIsRunning(false);
  }

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  return (
    <div className="countdown-timer">
      <div className="time-left">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning && <button className="start-btn" onClick={startTimer}>Start</button>}
        {isRunning && <button className="stop-btn"  onClick={stopTimer}>Stop</button>}
        <button className="reset-btn" onClick={resetTimer}>Reset</button>
      </div>
      <div className="cancel">
        <button className="cancel-btn">
            {/* <FaTimes /> */}
        </button>
      </div>
    </div>
  );
}

export default Countdown;
