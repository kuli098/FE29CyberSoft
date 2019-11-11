import React, { Component } from "react";

class FormKhoaHoc extends Component {
  render() {
    return (
      <div className="container">
        <div className="form-group">
          <span>Ma KH</span>
          <input name="maKhoaHoc" className="form-control" />
        </div>
        <div className="form-group">
          <span>Ten KH</span>
          <input name="tenKhoaHoc" className="form-control" />
        </div>
        <div className="form-group">
          <span>Mo Ta</span>
          <textarea className="form-control"></textarea>
        </div>
        <div className="form-group">
          <button name="maKhoaHoc" className="btn btn-success">
            Them Khoa Hoc
          </button>
        </div>
      </div>
    );
  }
}

export default FormKhoaHoc;
