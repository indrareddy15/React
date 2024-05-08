import React, { useState, useEffect, useRef } from "react";
import "./stopWatch.css";

const StopWatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervelRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervelRef.current = setInterval(() => {
        const elpTime = Date.now() - startTimeRef.current;
        setElapsedTime(elpTime);
      }, 10);

      return () => {
        clearInterval(intervelRef.current);
      };
    }
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const handleFormatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliSecs = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliSecs = String(milliSecs).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}:${milliSecs}`;
  };
  return (
    <div className="stopwatch">
      <div className="display">{handleFormatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={handleStart}>
          Start
        </button>
        <button className="stop-button" onClick={handleStop}>
          Stop
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
