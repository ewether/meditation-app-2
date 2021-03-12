import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import UserOptions from "../components/UserOptions";
import Countdown from "../components/Countdown";

function Main() {
  const [loading, setLoading] = useState(true);
  const [showCounter, setShowCounter] = useState(false);

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
      {showCounter ? (
        <Countdown />
      ) : (
        <UserOptions onBeginPress={() => setShowCounter(true)} />
      )}
    </div>
  );
}

export default Main;
