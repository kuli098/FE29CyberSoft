import React, { Component } from "react";
import classes from "./courseStyle.module.scss";
export default class CourseItem extends Component {
  render() {
    return (
      <div>
        <div className={classes.courseItem}>
          <img src="" alt="..."></img>
          <p>Tên Khoá học</p>
          <span className="p-3">Mô tả</span>
          <button className="btn btn-danger my-3">Xem chi tiết </button>
        </div>
      </div>
    );
  }
}
