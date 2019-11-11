import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetail } from "../../redux/Action/action";

class CourseDetail extends Component {
  render() {
    let {courseDetail} = this.props;
    return (
      <div>
        <p>{courseDetail.maKhoaHoc}</p>
        <p>{courseDetail.tenKhoaHoc}</p>
        <p>{courseDetail.moTa}</p>
        <img src={courseDetail.hinhAnh} alt=".."></img>
      </div>
    );
  }
  componentDidMount = () => {
    this.props.dispatch(fetchCourseDetail());
  };
}
const mapStateToProps = state => {
  return {
    courseDetail: state.courseDetail
  };
};
export default connect(mapStateToProps)(CourseDetail);
