import React, { useState } from "react";

function UserOptions({ onBeginPress }) {
  const [beginVisible, setBeginVisible] = useState(false);
  const [timerCount, setTimerCount] = useState(5);

  return (
    <div className="options-wrapper">
      <div className="time-options">
        <ul>
          <li
            className="time-opt"
            id="time-opt-5"
            onClick={() => {
              setTimerCount(5);
              setBeginVisible(true);
            }}
          >
            5min
          </li>
          <li
            className="time-opt"
            id="time-opt-15"
            onClick={() => {
              setTimerCount(15);
              setBeginVisible(true);
            }}
          >
            15min
          </li>
          <li
            className="time-opt"
            id="time-opt-30"
            onClick={() => {
              setTimerCount(30);
              setBeginVisible(true);
            }}
          >
            30min
          </li>
        </ul>
      </div>
      <div className="music-options">
        <ul>
          <li className="music-opt" id="music-opt-1">
            1
            <audio id="audio-1" preload="auto">
              {/* <source src="./audio/calm1.mp3"> </source> */}
            </audio>
          </li>
          <li className="music-opt" id="music-opt-2">
            2
            <audio id="audio-2" preload="auto">
              {/* <source src="./audio/calm2.mp3"> </source> */}
            </audio>
          </li>
          <li className="music-opt" id="music-opt-3">
            3
            <audio id="audio-3" preload="auto">
              {/* <source src="./audio/calm3.mp3"> </source> */}
            </audio>
          </li>
          <li className="music-opt" id="music-opt-4">
            4
            <audio id="audio-4" preload="auto">
              {/* <source src="./audio/calm4.mp3"> </source> */}
            </audio>
          </li>
        </ul>
      </div>
      {/* hide/show begin button based on beginVisible state value */}
      {beginVisible ? (
        <button
          className="begin-button"
          onClick={() => onBeginPress(timerCount)}
        >
          Begin
        </button>
      ) : null}
    </div>
  );
}

export default UserOptions;
