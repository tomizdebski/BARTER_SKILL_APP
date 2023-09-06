export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  
    const minutesString = minutes.toString().padStart(2, "0");
    const secondsString = seconds.toString().padStart(2, "0");
  
    return `${minutesString}:${secondsString}`;
  };