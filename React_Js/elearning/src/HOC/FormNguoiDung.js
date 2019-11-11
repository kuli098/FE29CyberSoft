import React, { Component } from "react";

class FormNguoiDung extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <span>Tai Khaoan</span>
          <input name="taiKhoan" className="form-control" />
        </div>
        <div className="form-group">
          <span>Mat Khau</span>
          <input name="matKhau" className="form-control" />
        </div>
        <div className="form-group">
          <span>Email</span>
          <input name="email" className="form-control" />
        </div>
        <div className="form-group">
          <button name="maKhoaHoc" className="btn btn-success">
            Them Nguoi Dung
          </button>
        </div>
      </div>
    );
  }
}

export default FormNguoiDung;
