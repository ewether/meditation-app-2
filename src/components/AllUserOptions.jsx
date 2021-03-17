import React, {useState, useEffect} from 'react';
import {Howl, Howler} from 'howler';
import Audio1 from '../audio/calm1.mp3'
import Audio2 from '../audio/calm2.mp3'
import Audio3 from '../audio/calm3.mp3'
import Audio4 from '../audio/calm4.mp3'

function AllUserOptions({ onBeginPress, timeClick }) {
    const [beginVisible, setBeginVisible] = useState(false);

    let sound1 = new Howl({
        src: [Audio1],
    });

    function onTimeClick(value) {
        setBeginVisible(true);
        timeClick(value);
    }
    
    return (
        <>
            <div className="time-options">
                <ul>
                    <li className="time-opt" id="time-opt-5" onClick={() => onTimeClick(5)}>
                        5 min
                    </li>
                    <li className="time-opt" id="time-opt-15" onClick={() => onTimeClick(15)}>
                        15 min
                    </li>
                    <li className="time-opt" id="time-opt-30" onClick={() => onTimeClick(30)}>
                        30 min
                    </li>
                </ul>
            </div>
            <div className="music-options">
                <ul>
                    <li className="music-opt" id="music-opt-1" onClick={() => sound1.play()}>
                        1
                    </li>
                    <li className="music-opt" id="music-opt-2">
                        2
                    </li>
                    <li className="music-opt" id="music-opt-3">
                        3
                    </li>
                    <li className="music-opt" id="music-opt-4">
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
};

export default AllUserOptions;
