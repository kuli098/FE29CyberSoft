import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  kiemTraStorage = () => {};

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-sm navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <NavLink to="/" className="navbar-brand" href="#">
            Cyber Soft
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink
                  to="/home"
                  className="nav-link"
                  activeClassName="bg-danger"
                  href="#"
                >
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/demohoc"
                  className="nav-link"
                  activeClassName="bg-danger"
                  href="#"
                >
                  Demo HOC
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              {this.props.credentials ? (
                <li className="nav-item">
                  <span className="nav-link text-danger">hello {this.props.credentials.hoTen} </span>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    activeClassName="bg-danger"
                    href="#"
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  credentials: state.user.credentials
});
export default connect(mapStateToProps)(Header);
