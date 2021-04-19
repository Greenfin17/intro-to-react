import React, { useState } from 'react';

const Counter = ({appName,initialValue}) => { 
  const [counter, setCounter] = useState(0);
  const [userInput, setUserInput] = useState(initialValue);
  const [counterName, setCounterName] = useState(appName);
  
  return (
    <div className ="container">
      <br />
      <label className ="input-counter-name">Counter Name</label>
      <input className ="input-counter-name"
       onChange={(e) => setCounterName(e.target.value)}>
      </input>
      <h1 className ="title">{counterName}</h1>
      <h2 className ="counter">{counter}</h2>

      <label className="user-increment">Increment / Decrement value</label>
      <input className="user-increment"
        onChange={(e) => setUserInput(Number(e.target.value))}>
      </input><br />
      
      <div className="increment-cluster">
        <button className="counter-button"
          onClick={() => setCounter((prevState) => prevState + userInput)}>
            Increment by {userInput}
        </button>
        {counter <= 0 ? '' : 
          <button className="counter-button" 
            onClick={() => setCounter((prevState) => prevState - userInput)}
            >Decrement by {userInput}
          </button>}
        </div>
      <button className="counter-button"
        onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}
export default Counter;
