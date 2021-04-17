import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

const App = () => {
  return(
  <>
    <Counter appName="Counter 1"/>
    <Counter appName="Counter 2"/>
    <Counter appName="Counter 3"/>
  </>
  )
};

export default App;
