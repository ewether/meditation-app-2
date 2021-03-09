import React, {useState, useEffect} from "react";
import Counter from './Counter'
import Options from './Options'
import OnLoadText from '../components/OnLoadText';
import Countdown from "../components/Countdown";
import AllUserOptions from "../components/AllUserOptions";

function Main() {
  const [showTitle, setShowTitle] = useState(true)
  const [showCounter, setShowCounter] = useState(false);

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
        <>
        <Countdown />
        </>
      ) : (
        <AllUserOptions onBeginPress={() => setShowCounter(true)} />
      )}
    </div>
  );
}

export default Main;

