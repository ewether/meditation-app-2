import React, { useState, useEffect } from "react";
import OnLoadText from "../components/OnLoadText";
import AllUserOptions from "../components/AllUserOptions";
import Countdown from "../components/Countdown";

function Main() {
  const [showTitle, setShowTitle] = useState(true)
  const [showCounter, setShowCounter] = useState(false);
  const [countdown, setCountdown] = useState();
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  if (showTitle) {
    return (
      <div className="container">
        <section className="main-wrapper">
          <OnLoadText />
        </section>
      </div>
    )
  }
  if (showOptions) {
    return (
      <div className="options-wrapper">
        <>
        <AllUserOptions onBeginPress={() => setShowOptions(false)} timeClick={(value) => 
          setCountdown(value)} />
        </>
      </div>
    )
  }
  return (
    <div className="main">
      {showCounter ? (
        <Countdown count={countdown} onBackClick={() => setShowOptions(true)} />
      ) : (
        <AllUserOptions onBeginPress={() => setShowCounter(true)} 
        timeClick={(value) => setCountdown(value)} />
      )}
    </div>
  );
}

export default Main;
