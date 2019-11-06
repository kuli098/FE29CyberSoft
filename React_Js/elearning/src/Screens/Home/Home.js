import React, { Component } from "react";
import classes from "./homeStyle.module.scss";
import CourseItem from "../../Components/coursItem/courseItem";
import CourseService from '../../Services/CourseService';
import reduxAction from '../../redux/Action/action';
import { connect } from "react-redux";
import {FETCH_COURSE} from '../../redux/Action/type'


const courseService = new CourseService();
class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className={classes.title}> Home </h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => {
              return (
                <div className="col-3 mb-4" key={index}>
                  <CourseItem item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    courseService.fetchCourse()
      .then(res => {
        // let courseList =[];
        this.props.dispatch(
          reduxAction(FETCH_COURSE,res.data)
        );
      })
      .catch(error => {
        console.log(error);
      });
  }
}

const mapStateToProps = state => {
  return {
    courseList: state.courseList
  };
};

export default connect(mapStateToProps)(HomeScreen);
