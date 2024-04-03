import React, { useEffect, useState } from "react";

import './Time.css';



function Time() {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    setTimeout(() => setTime(new Date(Date.now()).toLocaleTimeString()), 1000);
  });

  return (
    <div className="time">
      <h2>Real Time: {time} </h2>
    </div>
  )
};

export default Time;
