import React, { useState, useEffect } from "react";

function Timer(props) {
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
  if (props.gameWon) return;

  const interval = setInterval(() => {
    setSeconds(prev => prev + 1);
  }, 1000);

  return () => clearInterval(interval);
}, [props.gameWon]);

useEffect(() => {
    if (!props.gameWon) {
      setSeconds(0);
    }
  }, [props.gameWon]);

  // Convert to MM:SS
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  return <h1>Time: {formattedTime}</h1>;
}

export default Timer;
