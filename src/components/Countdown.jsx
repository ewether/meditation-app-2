import React, { useState, useRef, useContext } from "react";
import { Howl, Howler } from "howler";
import Audio1 from "../audio/calm1.mp3";
import Audio2 from "../audio/calm2.mp3";
import Audio3 from "../audio/calm3.mp3";
import Audio4 from "../audio/calm4.mp3";
import { OptionsContext } from "../utils/OptionsManager";

function padTime(time) {
  return time.toString().padStart(2, "0");
}

function Countdown({ onBackClick }) {
  const { count, setAudioSrc, audioSrc, audio, setAudio } = useContext(OptionsContext);

  const [timeLeft, setTimeLeft] = useState(count * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const [playing, setPlaying] = useState(null);

  function playSound(value) {
    setAudioSrc(audio);
    setPlaying(true);
      // let sound = new Howl({
      //   src: value,
      //   html5: true,
      // });

    // if (playing) {
      // Howler.play();
    // }
      // let soundId = sound.play();
      // setPlaying(soundId);
  }

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

    playSound();
  }

  function stopTimer() {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);

    if (playing) {
      Howler.stop(playing);
    }
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimeLeft(count * 60);
    setIsRunning(false);

    if (playing) {
      Howler.stop(playing);
    }
  }

  function backClick() {
    onBackClick();

    if (playing) {
      Howler.stop(playing);
    }
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
        {!isRunning && (
          <button className="start-timer-btn" onClick={startTimer}>
            Start
          </button>
        )}
        {isRunning && <button onClick={stopTimer}>Stop</button>}
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
