// import { LOGIN } from "./type";
import Axios from "axios";
import { settings } from "../../Config/Settings";

export const UserLogin = userLogin => {
  return dispatch => {
    Axios({
      method: "POST",
      url: settings.domain + "/api/QuanLyNguoiDung/DangNhap",
      data: userLogin,
    //   headers:{
    //       "Authorization":"Bearer" + localStorage.getItem(settings.token)
    //   }
    })
      .then(res => {
        console.log(res.data);
        // đăng nhập thành công thì lưu tt user vào localstorage để request về api yêu cầu
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
        localStorage.setItem(settings.token, res.data.accessToken);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
};
