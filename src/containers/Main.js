import React, { useState, useEffect } from "react";
import OnLoadText from "../components/OnLoadText";
import AllUserOptions from "../components/AllUserOptions";
import Countdown from "../components/Countdown";

function Main() {
  const [showTitle, setShowTitle] = useState(true)
  const [showCounter, setShowCounter] = useState(false);
  const [countdown, setCountdown] = useState();
  const [showOptions, setShowOptions] = useState(false);
  const [playMusic, setPlayMusic] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  function beginPress() {
    setShowOptions(false);
    setPlayMusic(false);
  }

  if (showTitle) {
    return (
      <>
        <OnLoadText />
      </>
    )
  }
  if (showOptions) {
    return (
      <div className="options-wrapper">
        <>
        <AllUserOptions onBeginPress={() => beginPress()} timeClick={(value) => 
          setCountdown(value)} />
        </>
      </div>
    )
  }
  return (
    <>
      {showCounter ? (
        <Countdown count={countdown} onBackClick={() => setShowOptions(true)} />
      ) : (
        <div className="options-wrapper">
          <AllUserOptions onBeginPress={() => setShowCounter(true)} 
          timeClick={(value) => setCountdown(value)} />
        </div>
      )}
    </>
  );
}

export default Main;
