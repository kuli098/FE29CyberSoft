import React, { Component } from "react";
// import Demo from "./Demo";
// import HomeScreen from "../Screens/Home/Home";
import HOCModal from "./HOCModal";
import FormNguoiDung from "./FormNguoiDung";
import FormKhoaHoc from "./FormKhoaHoc";

class HOCDemo extends Component {
  state = {
    Component: HOCModal({ Component: FormNguoiDung, title: "them nguoi dung" })
  };
  openPopup = formName => {
    //sau khi goi HOCModal => tra ve component giua giao dien Modal va body la  component truyen vao
    let Component = HOCModal({
      Component: FormNguoiDung,
      title: "them nguoi dung"
    });
    if (formName !== "FormKhoaHoc") {
      Component = HOCModal({
        Component: FormKhoaHoc,
        title: "them khoa hoc"
      });
    }
    this.setState({
      Component: Component
    });
  };
  render() {
    let {Component} = this.state;
    return (
      <div>
        <Component/>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => {
            this.openPopup("FormNguoiDung");
          }}
        >
          Them Nguoi Dung
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
          onClick={() => {
            this.openPopup("FormKhoaHoc");
          }}
        >
          Them Khoa Hoc
        </button>
      </div>
    );
  }
}

export default HOCDemo;
