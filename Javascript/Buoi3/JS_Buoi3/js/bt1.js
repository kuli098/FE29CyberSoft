const sinhVien = {
    maSV: "1234",
    hoTenSV: "Nhan",
    loaiSV: "Giau",
    diemToan: 10,
    diemVan: 8,
};

document.getElementById('spanTenSV').innerHTML = sinhVien.tenSV;
document.getElementById('spanMaSV').innerHTML = sinhVien.maSV;
document.getElementById('spanloaiSV').innerHTML = sinhVien.loaiSV;

function hienThiThongTin() {
    var _maSV = document.getElementById('txtMaSV').value;
    var _hoTenSV = document.getElementById('txtTenSV').value;
    var _loaiSV = document.getElementById('loaiSV').value;
    var _diemToan = parseFloat (document.getElementById('txtDiemToan').value);
    var _diemVan = parseFloat (document.getElementById('txtDiemVan').value);
    var sinhVien = {
        maSV: _maSV,
        tenSV: _tenSV,
        loaiSV: _loaiSV,
        diemToan: _diemToan,
        diemVan: _diemVan
    };
    var sinhVien = new SinhVien(_maSV, _hoTenSV, _loaiSV, _diemToan, _diemVan);
    //cach1
    // var diemTB = sinhVien.tinhDiemTrungBinh();
    // sinhVien.xepLoaiSV(diemTB);
    // var xepLoai = sinhVien.xepLoaiSV(diemTB);
    // cach2
    var diemTB = sinhVien.tinhDiemTrungBinh2();
    var xepLoai = sinhVien.xepLoaiSV2();

    document.getElementById('spanTenSV').innerHTML = sinhVien.hoTenSV;
    document.getElementById('spanMaSV').innerHTML = sinhVien.maSV;
    document.getElementById('spanloaiSV').innerHTML = sinhVien.loaiSV;
    //cach1
    // document.getElementById('spanDTB').innerHTML = diemTB;
    // document.getElementById('spanXepLoai').innerHTML = xepLoai;
    //cach2
    document.getElementById('spanDTB').innerHTML = sinhVien.diemTB;
    document.getElementById('spanXepLoai').innerHTML = sinhVien.xepLoai;
};


