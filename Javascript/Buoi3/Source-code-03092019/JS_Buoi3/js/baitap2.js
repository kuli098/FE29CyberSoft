var dssv = new DanhSachSinhVien();

function themSinhVien() {
  //B1 laasy thông tin người dùng nhập vào từ form
  var _maSV = document.getElementById("txtMaSV").value;
  var _hoTenSV = document.getElementById("txtTenSV").value;
  var _loaiSV = document.getElementById("loaiSV").value;
  var _diemToan = parseInt(document.getElementById("txtDiemToan").value);
  var _diemLy = parseInt(document.getElementById("txtDiemLy").value);
  var _diemHoa = parseInt(document.getElementById("txtDiemHoa").value);
  var _diemRenLuyen = parseInt(
    document.getElementById("txtDiemRenLuyen").value
  );
  //B2 lưu thông tin người dùng nhập vào đối tượng

  var sinhVien = new SinhVien2(
    _maSV,
    _hoTenSV,
    _loaiSV,
    _diemToan,
    _diemLy,
    _diemHoa,
    _diemRenLuyen
  );
  //B3 Lưu thông tin đối tượng thông tin vào mảng
  dssv.themSinhVien(sinhVien);
  console.log(dssv);
  //B4 dùng mảng dssv để tạo nội dung cho table SinhVien
  taoBang(dssv.dssv);
}

function taoBang(dssv) {
  var tbody = document.getElementById("tbodySinhVien");
  // createElement: tạo một thẻ mới, span, div, tr, td ....
  var tr = document.createElement("tr");

  // Tạo td mã SV
  var tdMaSV = document.createElement("td");
  tdMaSV.innerHTML = dssv[0].maSV;
  tr.appendChild(tdMaSV);
  // tạo td tên SV
  var tdHoTenSV = document.createElement("td");
  tdHoTenSV.innerHTML = dssv[0].hoTenSV;
  tr.appendChild(tdHoTenSV);
  // tạo td loại SV
  var tdLoaiSV = document.createElement("td");
  tdLoaiSV.innerHTML = dssv[0].loaiSV;
  tr.appendChild(tdLoaiSV);
  // tạo td điểm TB SV
  var diemTB = dssv[0].tinhDiemTrungBinh();
  var tdDiemTB = document.createElement("td");
  tdDiemTB.innerHTML = diemTB;
  tr.appendChild(tdDiemTB);
  // tạo td xếp loại SV
  var tdDiemRenLuyen = document.createElement("td");
  tdDiemRenLuyen.innerHTML = dssv[0].diemRenLuyen;
  tr.appendChild(tdDiemRenLuyen);

  // tbody appendChild tr: đưa tr vào trong tbody
  tbody.appendChild(tr);
}
