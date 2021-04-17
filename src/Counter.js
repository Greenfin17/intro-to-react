import React, { useState } from 'react';

const Counter = () => { 
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState("Counter 1");
  
  return (
    <>
    <h2>{counter}</h2>
    <h2>{userInput}</h2>
    <h2>{counterName}</h2>
    </>
  )
}
export default Counter;
