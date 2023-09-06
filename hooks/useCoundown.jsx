import { useState, useEffect } from "react";

export const useCountdown = (seconds) => {
  const [countdown, setCountdown] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 0) {
          clearInterval(interval);
          return prevCountdown;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  var sec_num = parseInt(countdown, 10); 
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (countdown === 0) return countdown;
  return countdown;
};
