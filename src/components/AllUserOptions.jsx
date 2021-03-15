import React, {useState, useEffect} from 'react';
import {Howl, Howler} from 'howler';
import Audio1 from '../audio/calm1.mp3'
import Audio2 from '../audio/calm2.mp3'
import Audio3 from '../audio/calm3.mp3'
import Audio4 from '../audio/calm4.mp3'

function AllUserOptions({ onBeginPress, timeClick }) {
    const [start, setStart] = useState(false);
    const [beginVisible, setBeginVisible] = useState(false);

    // var sound1 = new Howl({
    //     src: [Audio1],
    // });

    useEffect(() => {
        if (start) {
            setStart();
        };
      }, [start]);

    function timeClick(value) {
        setBeginVisible(true);
        // setCounterCount(value);
        console.log(value);
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
                        <audio src="../audio/calm1.mp3" id="audio-1" preload="auto">
                        {/* <audio src="../audio/calm1.mp3" id="audio-1" preload="auto" onClick={sound1.play()}> */}
                            {/* <source src="../audio/calm1.mp3"> </source> */}
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
