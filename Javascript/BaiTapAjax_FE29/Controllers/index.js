//tao mang khoa hoc
var mangKhoaHoc = [];

// //tao mang nguoi dung
// var mangNguoiDung = [];

// tao doi tuong services
var khoaHocSv = new KhoaHocService();

var ndServices = new NguoiDungServices(); //B3 tạo đối tượng services

//goi phuong thuc layThongTinKhoaHoc tu api => gan mang => tao bang

// goi phuong thuc done cua ajaxObject de load du lieu
function layThongTinKhoaHoc(){
    var ajaxObject = khoaHocSv.layDanhSachKhoaHoc();
    ajaxObject.done(function (result) {
        console.log(result);
        taoBang(result);
    })
}

layThongTinKhoaHoc();

function taoBang(mangKhoaHoc) {
    var tbody = '';
    for (var i = 0; i < mangKhoaHoc.length; i++) {
        var khoaHoc = mangKhoaHoc[i];
        tbody +=
            `
            <tr>
                <td>${khoaHoc.MaKhoaHoc}</td>
                <td>${khoaHoc.TenKhoaHoc}</td>
                <td>${khoaHoc.MoTa}</td>
                <td><img src="${khoaHoc.HinhAnh}" width="50" height"50"/></td>
                <td>${khoaHoc.LuotXem}</td>
                <td>${khoaHoc.NguoiTao}</td>
                <td><button class="btn btn-success" onclick="xoaKhoaHoc('${khoaHoc.MaKhoaHoc}')">Xóa</button></td>
            </tr>
        `
    }
    var table = `
        <table class="table">
            <thead>
                <tr>
                    <td>Ma Khoa Hoc</td>
                    <td>Ten Khoa Hoc</td>
                    <td>Hinh anh</td>
                    <td>Mo ta</td>
                    <td>Luot xem</td>
                    <td>Nguoi tao</td>
                </tr>
            </thead>
            <tbody>
                ${tbody}
            </tbody>
        </table>
    `;
    document.getElementById('contentTable').innerHTML = table;
}

//B4: chức năng load dữ liệu người dùng là giáo vụ lên control select
// B4.1: gọi ajax lấy hết dữ liệu người dùng về

ndServices.layDanhSachNguoiDung().done(function (result){
    // tạo mảng người dùng là giáo vụ
    var mangGV = [];
    for(i=0; i < result.length; i++){
        var nguoiDung = result[i];
        if(nguoiDung.MaLoaiNguoiDung === 'GV'){
            mangGV.push(nguoiDung);
        }
    }
    console.log(result);
    renderSelect(mangGV);
})

function renderSelect(mangGV){
    var contentOption ='';
    for(i = 0; i < mangGV.length; i++){
        var nguoiDung = mangGV[i];
        contentOption +=`
            <option value='${nguoiDung.TaiKhoan}'>${nguoiDung.HoTen}</option>
        `
    }
    //Dom đến thẻ select gán nội dung innerHTML là các thẻ option tạo vào
    document.getElementById('NguoiTao').innerHTML = contentOption;
}

//B4.2 viet xu ly cho nut them khoa hoc
document.getElementById('btnThemKhoaHoc').onclick = function(){
    //lấy thông tin người dùng từ input
    var _MaKH = document.getElementById('MaKhoaHoc').value;
    var _TenKH = document.getElementById('TenKhoaHoc').value;
    var _MoTa = document.getElementById('MoTa').value;
    var _HinhAnh = document.getElementById('HinhAnh').value;
    var _LuotXem = document.getElementById('LuotXem').value;
    var _NguoiTao = document.getElementById('NguoiTao').value;

    //Tạo đối tượng khóa học
    var kh = new KhoaHoc();
    kh.MaKhoaHoc = _MaKH;
    kh.TenKhoaHoc = _TenKH;
    kh.MoTa = _MoTa;
    kh.HinhAnh = _HinhAnh;
    kh.LuotXem = _LuotXem;
    kh.NguoiTao = _NguoiTao;

    // Gọi ajax phương thức themKhoaHoc
    khoaHocSv.themKhoaHoc(kh).done(function(result){
        console.log(result);
        taoBang(result);
    })
}

//viet xu ly cho ham xoa khoa hoc
function xoaKhoaHoc (maKhoaHoc){
    khoaHocSv.xoaKhoaHoc(maKhoaHoc).done(function(result){
        console.log(result);
        layThongTinKhoaHoc();
    })
}