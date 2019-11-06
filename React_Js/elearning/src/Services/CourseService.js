import Axios from "axios";

class CourseService {
  fetchCourseDetail = () => {
    return Axios({
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=111",
      method: "GET"
    });
  };
  fetchCourse() {
    Axios({
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET"
    });
  }
}
export default CourseService;
