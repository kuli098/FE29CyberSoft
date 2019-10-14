var dssv= new DanhSachSinhVien();

function themSinhVien() {
    var _maSV = document.getElementById('txtMaSV').value;
    var _hoTenSV = document.getElementById('txtTenSV').value;
    var _loaiSV = document.getElementById('loaiSV').value;
    var _diemToan = parseFloat (document.getElementById('txtDiemToan').value);
    var _diemLy = parseFloat (document.getElementById('txtDiemLy').value);
    var _diemHoa = parseFloat (document.getElementById('txtDiemHoa').value);
    var _diemRenLuyen = parseInt (document.getElementById('txtDiemRenLuyen').value);

    var sinhVien = new SinhVien2(_maSV, _hoTenSV, _loaiSV, _diemToan, _diemLy, _diemHoa, _diemRenLuyen);

    // dssv.themSinhVien(sinhVien);
    // console.log(dssv);

};
function taoBang(dssv){
    var tbody = document.getElementById("tbodySinhVien");
    var tr = document.createElement("tr"); //tao 1 the moi
    tr.appendChild(tr);
    // tao td maSV
    var tdMaSV = document.createElement("td");
    tdMaSV.innerHTML = dssv[0].maSV;
    tr.appendChild(tdMaSV);
    // tao td tensv
    var tdHoTenSV = document.createElement("td");
    tdHoTenSV.innerHTML = dssv[0].hoTenSV;
    tr.appendChild(tdHoTenSV);
    // tao td loai sv
    var tdLoai = document.createElement("td");
    tdLoai.innerHTML = dssv[0].loaiSV;
    tr.appendChild(tdLoai);

    // // tao td DiemTB
    var tdDiemTB = document.createElement("td");
    tdDiemTB.innerHTML = dssv[0].hoTenSV;
    var
    tr.appendChild(tdDiemTB)
}