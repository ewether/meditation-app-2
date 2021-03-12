import React, {useState, useEffect} from 'react';

function AllUserOptions({ onBeginPress, timeClick }) {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    const [beginVisible, setBeginVisible] = useState(false);

    useEffect(() => {
        if (start) {
            setStart();
        };
      }, [start]);

      function timeClick(time) {
        setBeginVisible(true);
        setTime(time);
        // console.log(time);
      }

    return (
        <>
            <div className="time-options">
                <ul>
                    <li className="time-opt" id="time-opt-5" onClick={() => timeClick(5)}>
                        5 min
                    </li>
                    <li className="time-opt" id="time-opt-15" onClick={() => timeClick(15)}>
                        15 min
                    </li>
                    <li className="time-opt" id="time-opt-30" onClick={() => timeClick(30)}>
                        30 min
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
            {beginVisible ? (
                <button className="begin-button" onClick={onBeginPress}>
                Begin
                </button>
            ) : null}
        </>
    );
};

export default AllUserOptions;
