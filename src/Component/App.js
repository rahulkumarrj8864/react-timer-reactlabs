import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "../styles.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
      return <div className="timer">Too lale...</div>;
    
  }else if(remainingTime < 0) {
    return <div className="timer">Too lale...</div>;
}

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const options = [10, 20, 30, 40, 50];

const SetlectReset = ({onClickReset,handleChange}) => {
    // const handleChange = (e) => {
    //     alert(e.target.value)
    // } 
  return (
    <div style={{ display: "flex", marginTop:"20px"}}>
      <select className="mr-5" onChange={handleChange}>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt + " sec"}
          </option>
        ))}
        {/* <option selected value={"10"}>10</option>
        <option value={"20"}>20</option>
        <option value={"30"}>30</option>
        <option value={"40"}>40</option>
        <option value={"50"}>50</option> */}
      </select>
      <button onClick={onClickReset}>Reset</button>
    </div>
  );
};

export default function App() {
    const [duration,setDuration] = useState(10)
    const [key, setKey] = useState(0);
    const handleChange =(e) => {
        let change = e.target.value
        setDuration(() => {
            setKey(prev => prev + 1)
            return change
        })
        // alert(e.target.value)
        // alert(e.target.value)
    }
    console.log(duration)
  const onClickReset = (e) => {
    setKey(prev => prev + 1)
        // setDuration(e.target.value)
      //   alert(clearInterval("hello"));
  }

  return (
    <div className="App">
      <h1>
        <a
          href="https://www.reactlabs.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Labs
        </a>
        <br />
        ReactJS Assignment
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
        key={key}
          isPlaying = {true}
          duration={duration}
        //   initialRemainingTime={duration}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
        >
          {renderTime}
        </CountdownCircleTimer>
        <SetlectReset onClickReset={onClickReset} handleChange={handleChange}/>
        <h3>Can you get this reset button to work?</h3>
        <h4>
          The reset button should reset as per the time selected in the dropdown
        </h4>
      </div>
    </div>
  );
}

