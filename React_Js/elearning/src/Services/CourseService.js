import Axios from "axios";

class CourseService {
  fetchCourseDetail = (courseid) => {
    return Axios({
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseid}`,
      method: "GET"
    });
  };
  fetchCourse() {
    return Axios({
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET"
    });
  }
}
export default CourseService;
