import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/BaiTapComponent/Demo';
import DemoStateFull from './components/BaiTapComponent/DemoStateFull';
import BaiTapComponent from './components/BaiTapComponent/BaiTapComponent';
import DemoEvent from './Event/DemoEvent';
import Login from './Event/Login';
import BaiTapState from './State/BaiTapState';
import DemoVongLap from './State/DemoVongLap';
import BaiTapVongLap1 from './State/BaiTapVongLap1';

function App() {

  let title = 'CYBERSOFT';


  return (
    <div className="App">
      {title}
      {/* <DemoStateFull /> */}
      {/* <Demo />
      <DemoStateFull /> */}
      {/* <BaiTapComponent /> */}
      <DemoEvent/>
      <Login/>
      <BaiTapState/>
      <DemoVongLap/>
      <BaiTapVongLap1/>
    </div>
  );
}

export default App;
