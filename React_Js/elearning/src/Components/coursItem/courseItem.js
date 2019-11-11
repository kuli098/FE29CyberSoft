import React, { Component } from "react";
import classes from "./courseStyle.module.scss";
export default class CourseItem extends Component {
  render() {
    let { hinhAnh, tenKhoaHoc, moTa } = this.props.item;
    return (
      <div className="h-100">
        <div className={classes.courseItem}>
          <img src={hinhAnh} alt="..."></img>
          <p className="text-danger">{tenKhoaHoc}</p>
          <span className="p-3">{this.shortenString(moTa)}</span>
          <button className="btn btn-success my-1">Xem chi tiết </button>
        </div>
      </div>
    );
  }
  shortenString = (string) => {
    if(string && string.length > 100){
      return string.substr(0,20) + "..."
    }
    return string
  };
}
