import React, { useState, useEffect } from "react";

const SignUpComponent = () => {
  //useState: sử dụng state
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDT: "",
    maLoaiNguoiDung: "HV",
    maNhom: "GP01"
  });
  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  //useEffect: sử dụng lifecycle
  //useEffect thay thế cho 3 lifecycle là: didMount, didUpdate, willMount

  //didmount chay 1 lan
  useEffect(() => {
    console.log("usssss");
  }, []);

  //chay n lan
  useEffect(() => {});

  //chay 1 lan dau, nhung lan sau se kiem tra demo va demo2
  //neu 1 trong 2 thay doi moi chay lai
  let demo = 1;
  let demo2 = 2;
  useEffect(() => {
    console.log("usssss");
  }, [demo, demo2]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-5 mx-auto">
          <form>
            <h4 className="display-4">Đăng Ký</h4>
            <div className="form-group">
              <label>Tài Khoản</label>
              <input
                name="taiKhoan"
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Mật Khẩu</label>
              <input
                name="matKhau"
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Họ Tên: </label>
              <input
                name="hoTen"
                onChange={handleChange}
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Số ĐT</label>
              <input
                name="soDT"
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success" type="submit">
                Đăng Ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
