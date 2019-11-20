import React, { Component } from "react";
import HomeScreen from "./Screens/Home/Home.js";
import "./App.css";
import CourseDetail from "./Screens/CourseDetail/CourseDetail";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HOCDemo from "./HOC/HOCDemo.js";
import Login from "./Screens/Login/Login.js";
import { connect } from "react-redux";
import reduxAction from "./redux/Action/action.js";
import { LOGIN } from "./redux/Action/type.js";
import { restConnector } from "./Services/index.js";
import Header from "./Layouts/header";
import PrivateRoute from "./HOC/Auth.js";
import SignUpComponent from "./Screens/SignUp/SignUp.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <PrivateRoute exact path="/home" Component={HomeScreen}></PrivateRoute>
            <Route
              exact
              path="/coursedetail/:courseid"
              component={CourseDetail}
            ></Route>
            <PrivateRoute exact path="/demohoc" Component={HOCDemo}></PrivateRoute>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={SignUpComponent}></Route>

            <Route exact path="/" component={HomeScreen}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  componentDidMount() {
    const userLoginStr = localStorage.getItem("userLogin");
    const userAccessToken = localStorage.getItem("accessToken");
    if (userLoginStr) {
      restConnector.defaults.headers["Athorization"] =
        "Bearer" + userAccessToken;
      this.props.dispatch(reduxAction(LOGIN, JSON.parse(userLoginStr)));
    }
  }
}

export default connect()(App);
