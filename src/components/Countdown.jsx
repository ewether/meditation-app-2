import React, { useState, useRef, useContext } from "react";
import { OptionsContext } from "../utils/OptionsManager";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function Countdown({ onBackClick }) {
  const { count, playSound, stopSound, previousSound } = useContext(
    OptionsContext
  );

  const [timeLeft, setTimeLeft] = useState(count * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const minutes = padTime(Math.floor(timeLeft / 60));
  const seconds = padTime(timeLeft - minutes * 60);

  function startTimer() {
    if (intervalRef.current !== null) {
      return;
    }
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => {
        if (timeLeft >= 1) {
          return timeLeft - 1;
        }
        resetTimer();
        return 0;
      });
    }, 1000);
    playSound(previousSound ? previousSound : "rain");
  }

  function stopTimer() {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
    stopSound();
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(count * 60);
    setIsRunning(false);
    stopSound();
  }

  function backClick() {
    onBackClick();
    stopSound();
  }

  return (
    <div className="countdown-timer">
      <div className="time-left">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {!isRunning && (
          <button className="start-timer-btn" onClick={startTimer}>
            Start
          </button>
        )}
        {isRunning && (
          <button className="start-timer-btn" onClick={stopTimer}>
            Stop
          </button>
        )}
        <button className="reset-timer-btn" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <div className="back">
        <button className="back-btn" onClick={() => backClick()}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Countdown;
