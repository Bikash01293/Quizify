import { useEffect, useState } from 'react'

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;

function Timer({duration, onExpire}) {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000)
    }, 1000);

    //break condition
    if(time <= 0) {
      onExpire();
      clearInterval(timerId);
    }

    //clean up
    return () => {
      clearTimeout(timerId);
    }

  }, [time, onExpire])

  const minutes = Math.floor(time / MINUTES);
  const seconds = Math.floor(time / SECONDS);
 
  return `${minutes}:${seconds}`;
};


export default Timer