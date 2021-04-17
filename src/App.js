import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

const App = () => {
  const array  = [
  {
    appName: "Counter 1",
    initialValue: 100
  },
  {
    appName: "Counter 2",
    initialValue: 100
  },
  {
    appName: "Counter 3",
    initialValue: 100
  },
  {
    appName: "Counter 4",
    initialValue: 100
  }
  ];

  return(
  <>
  { array.map((counter) => <Counter appName={counter.appName}
    initialValue={counter.initialValue}/>)
  }
  </>
  )
};

export default App;
