import React from 'react';
// import logo from './logo.svg';
import './styles/index.css';
import Counter from './Counter';

const App = () => {
  const array  = [
  {
    appName: "Counter 1",
    initialValue: 1
  },
  {
    appName: "Counter 2",
    initialValue: 2
  },
  {
    appName: "Counter 3",
    initialValue: 3
  },
  {
    appName: "Counter 4",
    initialValue: 4 
  }
  ];

  return(
  <>
  { array.map((counter, i) => <Counter key={i} appName={counter.appName}
    initialValue={counter.initialValue}/>)
  }
  </>
  )
};

export default App;
