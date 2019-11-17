// import Axios from "axios";
import { restConnector } from ".";

class CourseService {
  fetchCourseDetail = (courseid) => {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseid}`,
      method: "GET"
    });
  };
  fetchCourse() {
    return restConnector({
      url:
        "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET"
    });
  }
}
export default CourseService;
