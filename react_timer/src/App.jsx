import React, { useState, useEffect } from "react";

const Timer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>
        <span>{days} Days </span>
        <span>{hours} Hours </span>
        <span>{minutes} Minutes </span>
        <span>{seconds} Seconds</span>
      </div>
    </div>
  );
};

const App = () => {
  // Set the initial countdown time in milliseconds (4 days + 24 hours)
  const fourDaysInMilliseconds = 4 * 24 * 60 * 60 * 1000;
  const extra24HoursInMilliseconds = 24 * 60 * 60 * 1000;
  const totalTime = fourDaysInMilliseconds + extra24HoursInMilliseconds;

  return (
    <div>
      <Timer initialTime={totalTime} />
    </div>
  );
};

export default App;
