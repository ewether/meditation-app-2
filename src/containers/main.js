import React, {useState, useEffect} from "react";
import OnLoadText from '../components/OnLoadText';
import Countdown from "../components/Countdown";
import AllUserOptions from "../components/AllUserOptions";

function Main() {
  const [showTitle, setShowTitle] = useState(true)
  const [showCounter, setShowCounter] = useState(false);
  const [timer, setTimer] = useState(0);

  const [counterCount, setCounterCount] = useState(15);

  // on time-opt click, setBeginVisible = true and setTime = given time
  // function timeClick(time) {
  //   setTimer(time);
  // }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTitle(false)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Use an empty dependency array
  // to run useEffect once on mount

  if (showTitle) {
    return (
      <div className="container">
        <section className="main-wrapper">
          <OnLoadText/>
        </section>
      </div>
    )
  }
  return (
    <div className="options-wrapper">
      {showCounter ? (
        // count is set to the value of timer
        <>
        <Countdown count={counterCount} />
        </>
      ) : (
        // on begin press, timer is set to the users time choice
        <AllUserOptions onBeginPress={() => setShowCounter(true)} timeClick={(value) => 
          setTimer(value)} />
      )}
    </div>
  );
}

export default Main;

