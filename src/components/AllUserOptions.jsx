import React, { useState, useContext } from "react";
import Headphones from "../icons/headphones.png";

import { OptionsContext } from "../utils/OptionsManager";

function AllUserOptions({ showTimer }) {
  const { setCount, playSound, stopSound } = useContext(OptionsContext);
  const [beginVisible, setBeginVisible] = useState(false);
  const [activeOption, setActiveOption] = useState();

  function onTimeClick(value) {
    setCount(value);
    setBeginVisible(true);
  }

  function onBeginPress() {
    stopSound();
    showTimer();
  }

  function startPlaying(option) {
    if (activeOption !== option) {
      // play sound
      playSound(option);
      setActiveOption(option);
      return;
    }
    if (activeOption === option) {
      // stop and reset active sound
      setActiveOption();
      playSound();
      return;
    }
  }

  return (
    <>
      <div className="time-options">
        <h2 className="time-instruct">Choose a time option:</h2>
        <ul>
          <li
            className="time-opt"
            id="time-opt-5"
            onClick={() => onTimeClick(5)}
          >
            5 min
          </li>
          <li
            className="time-opt"
            id="time-opt-15"
            onClick={() => onTimeClick(15)}
          >
            15 min
          </li>
          <li
            className="time-opt"
            id="time-opt-30"
            onClick={() => onTimeClick(30)}
          >
            30 min
          </li>
        </ul>
      </div>
      <div className="music-options">
        <h2 className="music-instruct">Choose a sound option:</h2>
        <ul>
          <li
            className="music-opt"
            id="music-opt-1"
            onClick={() => startPlaying("zen")}
          >
            Zen
          </li>
          <li
            className="music-opt"
            id="music-opt-2"
            onClick={() => startPlaying("rain")}
          >
            Rain
          </li>
          <li
            className="music-opt"
            id="music-opt-3"
            onClick={() => startPlaying("ocean")}
          >
            Ocean
          </li>
          <li
            className="music-opt"
            id="music-opt-4"
            onClick={() => startPlaying("nature")}
          >
            Nature
          </li>
        </ul>
      </div>
      {beginVisible ? (
        <button className="begin-button" onClick={() => onBeginPress()}>
          Begin
        </button>
      ) : (
        <div className="headphones-wrapper">
          <img className="headphones" src={Headphones} alt="headphones" />
        </div>
      )}
    </>
  );
}

export default AllUserOptions;
