import React, { useState } from "react";
import { connect } from "react-redux";
import { UserLogin } from "../../redux/Action/UserLogin";

//component kh co lifecycle
function Login(props) {
  let [state, setState] = useState({
    userLogin: {
      taiKhoan: "",
      matKhau: ""
    },
    error: {
      taiKhoan: "",
      matKhau: ""
    }
  }); // tham so cua ham useState mac dinh

  let handleChange = event => {
    let { name, value } = event.target;
    let errorMessage = "";
    let userLoginUpdate = { ...state.userLogin, [name]: value };
    let errorUpdate = { ...state.error, [name]: errorMessage };
    setState({
      ...state,
      userLogin: { ...state.userLogin, [name]: value }
    });
    if (value === "") {
      errorMessage = name + "is required";
    }
    setState({
      userLogin: userLoginUpdate,
      error: errorUpdate
    });
    console.log(state);
  };
  let handleSubmit = event => {
    event.preventDefault();
    let valid = true;
    for (var errorName in state.error) {
      if (state.error[errorName] !== "") {
        valid = false;
      }
    }
    if (valid) {
      props.dispatch(UserLogin(state.userLogin)); // khi submit goi action (ajax) truyen vao data la userLogin tu nguoi dung
    } else {
      alert("du lieu kh hop le");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <strong>Tài Khoản</strong>
        <input
          name="taiKhoan"
          className="form-control"
          onChange={handleChange}
        ></input>
        <span className="text-danger">{state.error.taiKhoan}</span>
      </div>
      <div className="form-group">
        <strong>Mật khẩu</strong>
        <input
          type="password"
          name="matKhau"
          className="form-control"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </div>
    </form>
  );
}

export default connect()(Login);
