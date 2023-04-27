import React, { useState } from 'react'

const DigitalTimer = () => {
 
    //to get current time
    let time = new Date().toLocaleTimeString();

    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    };

    setInterval(updateTime, 1000)

  return (
    <div>
        <h1 style={{ fontSize:"80px"}}><u>Digital Clock</u></h1>
       <h1 style={{ fontSize:"100px"}}>{currentTime}</h1>
    </div>
  )
}

export default DigitalTimer;