import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './Timer/Test'
import Header from './Header'
import TenSecond from './TenSec';
import Countdown from './Countdown'


function App() {
  return (
    <div>
    <Header/>
    <Countdown/>
<TestComponent/> </div>
  );
}

export default App;
