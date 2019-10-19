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
import DemoProps from './BaiTapProps/DemoProps';
import SanPham from './BaiTapProps/SanPham';
import SanPhamF from './BaiTapProps/SanPhamF';
import BaiTapPropsCallback from './BaiTapProps/BaiTapPropsCallback';
import BaiTapGioHang from './baiTapGioHang/BaiTapGioHang';

function App() {

  let title = 'CYBERSOFT';
  let sanPham1 = {maSP: 1, tenSP:'Mi 8 Pro', gia: 1000};
  let sanPham2 = {maSP: 2, tenSP:'K20 Pro', gia: 2000};
  let sanPham3 = {maSP: 3, tenSP:'K30 Pro', gia: 3000};

  return (
    <div className="App">
      {/* {title} */}
      {/* <DemoStateFull /> */}
      {/* <Demo />
      <DemoStateFull /> */}
      <BaiTapComponent />
      {/* <DemoEvent/>
      <Login/>
      <BaiTapState/>
      <DemoVongLap/> */}
      {/* <BaiTapVongLap1/> */}
      {/* <DemoProps name="nguyen nhan"/>
      <div className="row">
        <SanPham sanPham={sanPham1}/>
        <SanPham sanPham={sanPham2}/>
        <SanPham sanPham={sanPham3}/>
        <SanPhamF sanPham={sanPham3}/>
      </div> */}
      {/* <BaiTapPropsCallback/> */}
      <BaiTapGioHang/>
    </div>
  );
}

export default App;
