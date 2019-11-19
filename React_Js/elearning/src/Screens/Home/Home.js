import React, { Component } from "react";
import classes from "./homeStyle.module.scss";
import CourseItem from "../../Components/coursItem/courseItem";
import { fetchCourse } from "../../redux/Action/action";
import { connect } from "react-redux";
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
                  <CourseItem item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount(){
    if (this.props.credentials) {
      this.props.dispatch(fetchCourse());
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.credentials && !prevProps.credentials) {
      this.props.dispatch(fetchCourse());
    }
  }
}

const mapStateToProps = state => {
  return {
    courseList: state.courseList,
    credentials: state.user.credentials
  };
};

export default connect(mapStateToProps)(HomeScreen);
