import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { settings } from "../Config/Settings";

//truyen vao 2 props: path, component
class PrivateRoute extends Component {
  render() {
    const { path, Component } = this.props;
    return (
      <Route
        path={path}
        render={routeProps => {
          if (localStorage.getItem(settings.userLogin)) {
            return <Component {...routeProps} />;
          }
          alert("Vui Lòng login");
          return <Redirect to="/login" />;
        }}
      />
    );
  }
}

export default PrivateRoute;
