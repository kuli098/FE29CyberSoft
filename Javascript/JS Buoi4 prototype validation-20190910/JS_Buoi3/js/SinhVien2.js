// Hàm khởi tạo phải viết hoa chử đầu
function SinhVien2(
  _maSV,
  _hoTenSV,
  _loaiSV,
  _diemToan,
  _diemLy,
  _diemHoa,
  _diemRenLuyen
) {
  this.maSV = _maSV;
  this.hoTenSV = _hoTenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.diemRenLuyen = _diemRenLuyen;

  this.tinhDiemTrungBinh = function() {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  };
  this.xepLoaiSinhVien = function(diemTB) {
    // Dùng cách này nếu không truyền tham số
    // var diemTB = this.tinhDiemTrungBinh()
    console.log(diemTB);
    if (diemTB < 3) {
      return "Yếu";
    }
    if (diemTB < 5) {
      return "Trung bình";
    }
    if (diemTB < 8) {
      return "Khá";
    }
    return "Giỏi";
  };
}
