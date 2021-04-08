import React, { createContext, useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import Audio1 from '../audio/calm1.mp3'
import Audio2 from '../audio/calm2.mp3'
import Audio3 from '../audio/calm3.mp3'
import Audio4 from '../audio/calm4.mp3'

export const OptionsContext = createContext();

export const OptionsContextProvider = ({ children }) => {
  const [count, setCount] = useState(30);
  const [audio, setAudio] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {

  }, []);

  useEffect(() => {
    console.log(audioSrc);

    if (audioSrc) {
      let sound = new Howl({
        src: audioSrc,
        html5: true,
      });

      let soundId = sound.play();
      setId(soundId);
    }


      // if (playing) {
      // Howler.stop(playing);
      // }
      // setPlaying(soundId);

  }, [audioSrc]);
  // useEffect is triggered any time audioSrc state changes

  useEffect(() => {
    if (playing) {
      Howler.stop(id);
    } 
    
    let newSoundId = id;

    if (newSoundId) {
      newSoundId.play();
    }

  }, [playing, id]);

  const addCount = (time) => {
    console.log(
      time
    );

    setCount(time);
  };

  const resetCount = () => setCount(30);

  const passAudioId = (value) => {
    if (value) {
      setAudio(value);
    }

    console.log(value);
  }

  return (
    <OptionsContext.Provider value={{ count, addCount, resetCount, passAudioId, audio, setAudioSrc, setAudio, setPlaying }}>
      {children}
    </OptionsContext.Provider>
  );
};