import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import UserOptions from "../components/UserOptions";
import Countdown from "../components/Countdown";

function Main() {
  const [loading, setLoading] = useState(true);
  const [showCounter, setShowCounter] = useState(false);
  const [countdown, setCountdown] = useState(5);
  console.log("🚀 ~ file: main.js ~ line 10 ~ Main ~ countdown", countdown);

  // Use an empty dependency array
  // to run useEffect once on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      // hide loader text after two seconds
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="main">
      {/* Here we pass the countdown state as prop count to CountDown */}
      {showCounter ? (
        <Countdown count={countdown} />
      ) : (
        <UserOptions
          onBeginPress={(timerCount) => {
            setShowCounter(true);
            // set the correct state of
            // the selected counter in countdown
            setCountdown(timerCount);
          }}
        />
      )}
    </div>
  );
}

export default Main;
