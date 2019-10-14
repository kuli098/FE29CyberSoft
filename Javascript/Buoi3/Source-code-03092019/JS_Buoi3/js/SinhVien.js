// Hàm khởi tạo phải viết hoa chử đầu
function SinhVien(_maSV, _hoTenSV, _loaiSV, _diemToan, _diemVan) {
  this.maSV = _maSV;
  this.hoTenSV = _hoTenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemVan = _diemVan;

  // Cách 2
  this.diemTB = 0;
  this.xepLoai = "";

  this.tinhDiemTrungBinh = function() {
    return (this.diemToan + this.diemVan) / 2;
  };
  this.tinhDiemTrungBinh2 = function() {
    this.diemTB = (this.diemToan + this.diemVan) / 2;
  };
  this.xepLoaiSinhVien1 = function(diemTB) {
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
  this.xepLoaiSinhVien2 = function() {
    if (this.diemTB < 3) {
      this.xepLoai = "Yếu";
    } else if (this.diemTB < 5) {
      this.xepLoai = "Trung bình";
    } else if (this.diemTB < 8) {
      this.xepLoai = "Khá";
    } else {
      this.xepLoai = "Giỏi";
    }
  };
}
