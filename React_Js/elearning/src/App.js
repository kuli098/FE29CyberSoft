import React from "react";
import HomeScreen from "./Screens/Home/Home.js";
import "./App.css";
import CourseDetail from "./Screens/CourseDetail/CourseDetail";
import { BrowserRouter, Switch } from "react-router-dom";
// import Header from "./Layouts/header.js";
import HOCDemo from "./HOC/HOCDemo.js";
import { HomeTemplate } from "./Templates/HomeTemplate.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HomeTemplate
            exact
            path="/home"
            Component={HomeScreen}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/coursedetail"
            Component={CourseDetail}
          ></HomeTemplate>
          <HomeTemplate
            exact
            path="/demohoc"
            Component={HOCDemo}
          ></HomeTemplate>
          <HomeTemplate exact path="/" Component={HomeScreen}></HomeTemplate>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
