import React, {useState, useEffect} from 'react';

function AllUserOptions({ onBeginPress }) {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState(0);
    const [beginVisible, setBeginVisible] = useState(false);

    useEffect(() => {
        if (start) {
            setTime(15);
        };
      }, [start]);

    return (
        <>
            <div className="time-options">
                <ul>
                    <li className="time-opt" id="time-opt-5" onClick={() => setBeginVisible(true)}>
                        5min
                    </li>
                    <li className="time-opt" id="time-opt-15" onClick={() => setBeginVisible(true)}>
                        {time}
                    </li>
                    <li className="time-opt" id="time-opt-30" onClick={() => setBeginVisible(true)}>
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
            {beginVisible ? (
                <button className="begin-button" onClick={onBeginPress}>
                Begin
                </button>
            ) : null}
        </>
    );
};

export default AllUserOptions;
