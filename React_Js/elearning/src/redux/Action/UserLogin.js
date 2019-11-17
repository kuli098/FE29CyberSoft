// import Axios from "axios";
import { settings } from "../../Config/Settings";
import reduxAction from "./action";
import { LOGIN } from "./type";
import { restConnector } from "../../Services";

export const UserLogin = userLogin => {
  return dispatch => {
    restConnector({
      method: "POST",
      url: settings.domain + "/api/QuanLyNguoiDung/DangNhap",
      data: userLogin,
    })
      .then(res => {
        // console.log(res.data);
        // luu local
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
        localStorage.setItem(settings.token, res.data.accessToken);

        // lưu data lên store de render lai giao dien header
        dispatch(reduxAction(LOGIN, res.data));

        //bỏ token lên header của tất cả requet
        restConnector.defaults.headers['Athorization'] = "Bearer" + res.data.accessToken
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };
};
