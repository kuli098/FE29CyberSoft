var sinhVien = {
  maSV: "1234",
  hoTenSV: "Tèo",
  loaiSV: "Nghèo",
  diemToan: 8,
  diemVan: 7
};

document.getElementById("spanTenSV").innerHTML = sinhVien.hoTenSV;
document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;

function hienThiThongTin() {
  var _maSV = document.getElementById("txtMaSV").value;
  var _hoTenSV = document.getElementById("txtTenSV").value;
  var _loaiSV = document.getElementById("loaiSV").value;
  var _diemToan = parseInt(document.getElementById("txtDiemToan").value);
  var _diemVan = parseInt(document.getElementById("txtDiemVan").value);
  // var sinhVien = {
  //   maSV: _maSV,
  //   hoTenSV: _hoTenSV,
  //   loaiSV: _loaiSV,
  //   diemToan: _diemToan,
  //   diemVan: _diemVan
  // };
  var sinhVien = new SinhVien(_maSV, _hoTenSV, _loaiSV, _diemToan, _diemVan);
  // Cách 1
  var diemTB = sinhVien.tinhDiemTrungBinh();
  var xepLoai = sinhVien.xepLoaiSinhVien1(diemTB);
  // Cách 2
  sinhVien.tinhDiemTrungBinh2();
  sinhVien.xepLoaiSinhVien2();

  document.getElementById("spanTenSV").innerHTML = sinhVien.hoTenSV;
  document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
  document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  // Cách 1
  // document.getElementById("spanDTB").innerHTML = diemTB;
  // document.getElementById("spanXepLoai").innerHTML = xepLoai;
  // Cách 2
  document.getElementById("spanDTB").innerHTML = sinhVien.diemTB;
  document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai;
}
