import React, { Component } from "react";
import classes from "./homeStyle.module.scss";
import CourseItem from "../Components/coursItem/courseItem";
import Axios from "axios";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className={classes.title}> Home </h1>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <CourseItem />
            </div>
            <div className="col-3">
              <CourseItem />
            </div>
            <div className="col-3">
              <CourseItem />
            </div>
            <div className="col-3">
              <CourseItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    Axios({
      url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: 'GET'
    }).then(res => {
        console.log(res);
    }).catch(error=>{
        console.log(error);
    });
  }
}
export default HomeScreen;
