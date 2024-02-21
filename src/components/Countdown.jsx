import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  function calculateTimeLeft() {
    const deadline = moment('2024-03-11T00:00:00Z');
    const now = moment();
    const diff = deadline.diff(now);
    const duration = moment.duration(diff);
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function formatTimeLeft() {
    const { days, hours, minutes, seconds } = timeLeft;
    return `${days} , ${hours}, ${minutes}, ${seconds}`;
  }

  return (
    <div className="text-center mt-4">
      {timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? (
        <h2 className="text-xl font-bold text-gray-800">Registration closes in: {formatTimeLeft()}</h2>
      ) : (
        <h2 className="text-xl font-bold text-red-500">Registration Closed</h2>
      )}
    </div>
  );
};

export default Countdown;
