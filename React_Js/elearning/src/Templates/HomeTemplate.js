import { Route } from "react-router-dom";
import React, { Fragment } from "react";
import Header from "../Layouts/header";

const HomeLayout = props => {
  return (
    /* Fragment: thẻ tàng hình, lúc render ra giao diện thì sẽ không hiện ra thẻ này*/
    <Fragment>
      <Header />
      {props.children}
    </Fragment>
  );
};

export const HomeTemplate = ({ Component, ...propsRoute }) => {
  return (
    <Route
      {...propsRoute}
      render={({ ...propsComponent }) => {
        return (
          <HomeLayout>
            <Component {...propsComponent} />
          </HomeLayout>
        );
      }}
    />
  );
};
