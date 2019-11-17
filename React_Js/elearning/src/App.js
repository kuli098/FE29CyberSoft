import React, { Component } from "react";
import HomeScreen from "./Screens/Home/Home.js";
import "./App.css";
import CourseDetail from "./Screens/CourseDetail/CourseDetail";
import { BrowserRouter, Switch } from "react-router-dom";
import HOCDemo from "./HOC/HOCDemo.js";
import { HomeTemplate } from "./Templates/HomeTemplate.js";
import Login from "./Screens/Login/Login.js";
import { connect } from "react-redux";
import reduxAction from "./redux/Action/action.js";
import { LOGIN } from "./redux/Action/type.js";
import { restConnector } from "./Services/index.js";

class App extends Component {
  render() {
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
              path="/coursedetail/:courseid"
              Component={CourseDetail}
            ></HomeTemplate>
            <HomeTemplate
              exact
              path="/demohoc"
              Component={HOCDemo}
            ></HomeTemplate>
            <HomeTemplate exact path="/login" Component={Login}></HomeTemplate>
            <HomeTemplate exact path="/" Component={HomeScreen}></HomeTemplate>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  componentDidMount() {
    const userLoginStr = localStorage.getItem("userLogin");
    const userAccessToken = localStorage.getItem('accessToken');
    if (userLoginStr) {
      restConnector.defaults.headers['Athorization'] = 'Bearer' + userAccessToken
      this.props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
    }
  }
}

export default connect()(App);
