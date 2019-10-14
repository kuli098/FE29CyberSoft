function DanhSachSinhVien() {
  this.dssv = [];
  // hàm thêm sinh viên
  this.themSinhVien = function(sinhVien) {
    // push: thêm vào cuối
    this.dssv.push(sinhVien);
  };
}
