import React, { useState } from 'react';

const Counter = () => { 
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState(1);
  const [counterName, setCounterName] = useState("Counter 1");
  
  return (
    <div>
      <input 
        onChange={(e) => setCounterName(e.target.value)}>
      </input>
      <h1>{counterName}</h1>
      <h2>{counter}</h2>

      <input
        onChange={(e) => setCounterName(e.target.value)}>
      </input>

      <input 
        onChange={(e) => setUserInput(Number(e.target.id))}>
      </input><br />

      <button 
        onClick={() => setCounter((prevState) => prevState + userInput)}>
          Increment by {userInput}
      </button>
      {counter <= 0 ? '' : 
        <button onClick={() => setCounter((prevState) => prevState - 1)}
          >Decrement by {userInput}
        </button>}
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}
export default Counter;
