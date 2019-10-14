// khai bao khong tham so
/*function NhanVien(){
    this.maNV = '';
    this.hoTenNV = '';
    this.email = '';
    this.matKhau = '';
    this.ngaySinh = '';
    this.chucVu = '';
}
var nhanVien = new NhanVien();
nhanVien.maNV = 1;*/

// khai báo có tham số Lớp đối tượng nhân viên
function NhanVien(_maNV, _hoTenNV, _email, _matKhau, _ngaySinh, _chucVu){
    this.maNV = _maNV;
    this.hoTenNV = _hoTenNV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.chucVu = _chucVu;

}
// var nhanVien = NhanVien(1, 'Nguyen Van A', '123456@gmail.com', 'a123', '12/02/1998', 'Giam doc');