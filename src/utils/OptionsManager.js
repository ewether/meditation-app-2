import React, { createContext, useState } from "react";
import { Howl, Howler } from "howler";
import Audio1 from '../audio/calm1.mp3'
import Audio2 from '../audio/calm2.mp3'
import Audio3 from '../audio/calm3.mp3'
import Audio4 from '../audio/calm4.mp3'

export const OptionsContext = createContext();

export const OptionsContextProvider = ({ children }) => {
  const [count, setCount] = useState(30);
  const [audio, setAudio] = useState(null);

  const addCount = (time) => {
    console.log(
      time
    );
    setCount(time);
  };

  const resetCount = () => setCount(30);

  const passAudioId = (value) => {
    setAudio(value);

    console.log(value);
  }

  return (
    <OptionsContext.Provider value={{ count, addCount, resetCount, passAudioId, audio }}>
      {children}
    </OptionsContext.Provider>
  );
};