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
        <img src={courseDetail.hinhAnh} alt=".." width="200px"></img>
      </div>
    );
  }
  componentDidMount = () => {
    const {courseid} = this.props.match.params;
    this.props.dispatch(fetchCourseDetail(courseid));
  };
}
const mapStateToProps = state => {
  return {
    courseDetail: state.courseDetail
  };
};
export default connect(mapStateToProps)(CourseDetail);
