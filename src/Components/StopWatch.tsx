import "./StopWatch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function StopWatch() {

  const [isRunning, setIsRunning] = useState(false);
  const [hours, setHours] =  useState(0);
  const [minutes, setMinutes] =  useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = null;
    if (isRunning) {
        timer = setInterval(() => {
            setSeconds((seconds) => {
                let newSeconds = seconds + 1;
                if (newSeconds >= 60) {
                    setMinutes((minutes) => {
                        let newMinutes = minutes + 1;
                        if (newMinutes >= 60) {
                            setHours((hours) => hours + 1);
                            return 0;
                        }
                        return newMinutes;
                    });
                    return 0;
                }
                return newSeconds;
            });
        }, 1000);
    } else {
        clearInterval(timer!);
    }
  return () => clearInterval(timer!);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  }

  const stop = () => {
    setIsRunning(false);
  }

  const reset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  const timeFormat = () => {
    const pad = (number: number) => {
      return number < 10 ? "0" + number : number;
    }

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  return (
    <>
        <h3>Stopwatch-React-app</h3>

      <div className="stopwatch-container">
        <div className="stopwatch">
          <div className="display">{timeFormat()}</div>
        </div>
      </div>
      <div className="controls-container">
        <div className="controls">
          <button type="button" className="btn btn-success a" onClick={start}>Start</button>
          <button type="button" className="btn btn-danger a" onClick={stop}>Stop</button>
          <button type="button" className="btn btn-warning a" onClick={reset}>Reset</button>
        </div>
      </div>
      <p>github.com/nubawan</p>

    </>
  );
}

export default StopWatch;
