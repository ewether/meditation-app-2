import React, { createContext, useState, useEffect } from "react";
import { Howl, Howler } from "howler";
import Audio1 from "../audio/calm1.mp3";
import Audio2 from "../audio/calm2.mp3";
import Audio3 from "../audio/calm3.mp3";
import Audio4 from "../audio/calm4.mp3";

export const OptionsContext = createContext();

export const OptionsContextProvider = ({ children }) => {
  const [count, setCount] = useState(30);
  const [sound, setSound] = useState(null);
  const [soundId, setSoundId] = useState(null);
  const [previousSound, setPreviousSound] = useState(null);

  const playSound = (option) => {
    Howler.unload();
    if (option) {
      setPreviousSound(option);
    }
    switch (option) {
      case "zen":
        setSound(Audio1);
        break;
      case "rain":
        setSound(Audio2);
        break;
      case "ocean":
        setSound(Audio3);
        break;
      case "nature":
        setSound(Audio4);
        break;
      default:
        setSound(null);
        break;
    }
  };

  const stopSound = () => {
    Howler.stop();
    setSound(null);
  };

  const resetCount = () => setCount(30); // resets count to default 30 mins

  useEffect(() => {
    if (sound) {
      let audio = new Howl({
        src: sound,
        html5: true,
      });
      let id = audio.play();
      setSoundId(id);
      return;
    }
  }, [sound]); // useEffect is triggered any time sound state changes

  return (
    <OptionsContext.Provider
      value={{
        count,
        setCount,
        resetCount,
        soundId,
        playSound,
        stopSound,
        previousSound,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
};
