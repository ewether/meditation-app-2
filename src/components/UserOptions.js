import React from "react";

function UserOptions() {
  return (
    <div className="options-wrapper">
      <div className="time-options">
        <ul>
          <li className="time-opt" id="time-opt-5">
            5min
          </li>
          <li className="time-opt" id="time-opt-15">
            15min
          </li>
          <li className="time-opt" id="time-opt-30">
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
      <button className="begin-button">Begin</button>
    </div>
  );
}

export default UserOptions;
