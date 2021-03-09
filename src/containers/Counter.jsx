import React, {useState, useEffect} from "react";
import Countdown from '../components/Countdown.jsx';

function Counter() {
    const [timeLeft, setTimeLeft] = useState('10:00');

    useEffect(() => {
      const timer = setTimeout(() => {
        setTimeLeft();
      }, 1000);
    });

  return (
    <div>
        <Countdown time = {timeLeft} />
    </div>
  );
}

export default Counter;