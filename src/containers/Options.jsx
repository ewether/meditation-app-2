import React, {useState, useEffect} from "react";
import AllUserOptions from "../components/AllUserOptions";
import BeginButton from "../components/BeginButton";

function Options() {
    const [showOptions, setShowOptions] = useState(true);

    // when showOptions changes, this runs
    useEffect(() => {
        console.log('hi');
        }, [showOptions]);

  return (
    <div className="options-wrapper">
        {showOptions ? <AllUserOptions /> : null} 
        {/* <BeginButton onBegin = {() => setShowOptions(false)} text = 'Begin' /> */}
        {/* <Options onBeginPress={() => setShowCounter(true)} /> */}
    </div>
  );
}

export default Options;