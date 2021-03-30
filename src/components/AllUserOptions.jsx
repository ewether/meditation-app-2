import React, { useState, useEffect, useContext } from 'react';
import Headphones from '../icons/headphones.png';
import { Howl, Howler } from "howler";
import Audio1 from '../audio/calm1.mp3'
import Audio2 from '../audio/calm2.mp3'
import Audio3 from '../audio/calm3.mp3'
import Audio4 from '../audio/calm4.mp3'

import { OptionsContext } from "../utils/OptionsManager";

function AllUserOptions({ onBeginPress, timeClick }) {
    const { addCount } = useContext(OptionsContext);
    const [beginVisible, setBeginVisible] = useState(false);
    let [playing, setPlaying] = useState(null);

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
                <h2 className="time-instruct">
                    Choose a time option:
                </h2>
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
                <h2 className="music-instruct">
                    Choose a sound option:
                </h2>
                <ul>
                    <li className="music-opt" id="music-opt-1" onClick={() => playSound(Audio1)}>
                        Zen
                    </li>
                    <li className="music-opt" id="music-opt-2" onClick={() => playSound(Audio2)}>
                        Rain
                    </li>
                    <li className="music-opt" id="music-opt-3" onClick={() => playSound(Audio3)}>
                        Ocean
                    </li>
                    <li className="music-opt" id="music-opt-4" onClick={() => playSound(Audio4)}>
                        Nature
                    </li>
                </ul>
            </div>
            {beginVisible ? (
                <button className="begin-button" onClick={onBeginPress}>
                Begin
                </button>
            ) : <div className="headphones-wrapper">
                    <img className="headphones" src={Headphones} />
                </div>}
        </>
    );
};

export default AllUserOptions;
