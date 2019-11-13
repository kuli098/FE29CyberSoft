import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./courseStyle.module.scss";
export default class CourseItem extends Component {
  render() {
    let { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = this.props.item;
    return (
      <div className="h-100">
        <div className={classes.courseItem}>
          <img src={hinhAnh} alt="..."></img>
          <p className="text-danger">{tenKhoaHoc}</p>
          <span className="p-3">{this.shortenString(moTa)}</span>
          <NavLink
            className="btn btn-success my-1"
            to={`/coursedetail/${maKhoaHoc}`}
          >
            Xem chi tiết
          </NavLink>
        </div>
      </div>
    );
  }
  shortenString = string => {
    if (string && string.length > 100) {
      return string.substr(0, 20) + "...";
    }
    return string;
  };
}
