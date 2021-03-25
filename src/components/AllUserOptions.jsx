import React, { useState, useEffect, useContext } from "react";
import { Howl, Howler } from "howler";
import Audio1 from "../audio/calm1.mp3";
import Audio2 from "../audio/calm2.mp3";
import Audio3 from "../audio/calm3.mp3";
import Audio4 from "../audio/calm4.mp3";

import { OptionsContext } from "../utils/OptionsManager";

function AllUserOptions({ onBeginPress, timeClick }) {
  const { addCount } = useContext(OptionsContext);
  const [beginVisible, setBeginVisible] = useState(false);
  const [playing, setPlaying] = useState(null);

  function onTimeClick(value) {
    addCount(value);
    setBeginVisible(true);
    timeClick(value);
  }

  function playSound(value) {
    let sound = new Howl({
      src: value,
      html5: true,
    });

    if (playing) {
      Howler.stop(playing);
    }
    let soundId = sound.play();

    setPlaying(soundId);
  }

  return (
    <>
      <div className="time-options">
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
        <ul>
          <li
            className="music-opt"
            id="music-opt-1"
            onClick={() => playSound(Audio1)}
          >
            1
          </li>
          <li
            className="music-opt"
            id="music-opt-2"
            onClick={() => playSound(Audio2)}
          >
            2
          </li>
          <li
            className="music-opt"
            id="music-opt-3"
            onClick={() => playSound(Audio3)}
          >
            3
          </li>
          <li
            className="music-opt"
            id="music-opt-4"
            onClick={() => playSound(Audio4)}
          >
            4
          </li>
        </ul>
      </div>
      {beginVisible ? (
        <button className="begin-button" onClick={onBeginPress}>
          Begin
        </button>
      ) : null}
    </>
  );
}

export default AllUserOptions;
