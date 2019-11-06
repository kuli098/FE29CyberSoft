import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchCourseDetail} from '../../redux/Action/action';

// const courseService = new CourseService();
class CourseDetail extends Component {
  render() {
    return (
      <div>
        <p>{this.props.courseDetail.maKhoaHoc}</p>
        <p>{this.props.courseDetail.tenKhoaHoc}</p>
        <p>{this.props.courseDetail.moTa}</p>
        <img src={this.props.courseDetail.hinhAnh} alt=".."></img>
      </div>
    );
  }
  componentDidMount = () => {
    this.props.dispatch(fetchCourseDetail())
  }
}
const mapStateToProps = state => {
    return {
        courseDetail: state.courseDetail
    };
  };
export default connect(mapStateToProps)(CourseDetail);

