/*
Yêu cầu 1: Đọc file dữ liệu từ menu.json, lưu vào 1 biến mảng (Hoặc prototype)

Yêu cầu 2: Dựa vào mảng và giao diện có sẵn tổ chức hàm để load menu đa cấp như sau
  -TheLoai
    +Phim kiếm hiệp
    +Phim hành động
    ...
  -PhimLe
    +Phim lẻ 2017
    ...
  -PhimBo
    ...
  -PhimChieuRap
    ...

Yêu cầu 3(*):
  +Xây dựng các input thực hiện các chức năng thêm xóa sửa trên mảng menu,(và menu con)
  +Viết phương thức tạo bảng quản lý menu bên dưới (Bảng để quản lý menu)
  +Viết phương thức tạo lại menu theo mảng (Phía trên, cũng tương tự tạo table thì ta tạo ra các ul li)
  Tóm lại: Sau các nghiệp vụ thêm xóa sửa => Render lại menu và cả table
  +Check validation cho các trường input (Kiểm tra rổng)
*/


//Yêu cầu 1: Đọc file dữ liệu từ menu.json, lưu vào 1 biến mảng (Hoặc prototype)
//tao mangPhim
var mangMenuPhim = [];

// tao doi tuong service
var _phim = new PhimService();


//Gọi phương thức done load dữ liệu
function layThongTinPhim() {
  var ajaxObject = _phim.layDanhSachPhim();
  ajaxObject.done(function (result) {
    // console.log(result);
    taoBang(result);
    loadMenu(result);
  });
}

layThongTinPhim();

function taoBang(mangMenuPhim) {
  var tbody = '';
  console.log(mangMenuPhim);
  for (var i in mangMenuPhim) {
    var phim = mangMenuPhim[i];
    tbody += `
        <tr>
          <td>${phim.maDanhMucPhim}</td>
          <td>${phim.tenDanhMucPhim}</td>
          <td>
              <button class="btn btn-success">Sửa</button>
              <button class="btn btn-danger">Xóa</button>
              <button class="btn btn-success" data-toggle="modal" data-target="#modelId">Menu Item</button>
            </td>
        </tr>
      `;
  }
  var table = `
    <table class="table">
      <thead>
        <tr>
          <th>Mã danh mục</th>
          <th>Tên danh mục</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
            ${tbody}
      </tbody>
    </table>`
  document.getElementById("tblDanhMucPhim").innerHTML = table;
}

/*Yêu cầu 2: Dựa vào mảng và giao diện có sẵn tổ chức hàm để load menu đa cấp như sau
  -TheLoai
    +Phim kiếm hiệp
    +Phim hành động
    ...
  -PhimLe
    +Phim lẻ 2017
    ...
  -PhimBo
    ...
  -PhimChieuRap
    ...*/
function loadMenu(mangMenuPhim) {
  for (var i in mangMenuPhim) {
    var phim = mangMenuPhim[i];
    console.log(phim);
    for (var j in phim.DanhMucPhim) {
        var DS = phim.DanhMucPhim[j];
     }
    //  console.log(DS);
  }
  var danhmuc = mangMenuPhim[0];
  var contentLi ='';
  for(var i=0; i<mangMenuPhim.length;i++){
    console.log(danhmuc.DanhMucPhim[i].ten);
    contentLi +=`
      <li><a href="#">${danhmuc.DanhMucPhim[i].ten}</a></li>
    `
  }
  document.getElementById('phimLe').innerHTML = contentLi;


  // console.log(mangMenuPhim);
  // for(var i in mangMenuPhim){
  //   var danhMucPhim = mangMenuPhim[i];
  //   console.log(danhMucPhim.DanhMucPhim[i].ten);
  //   // if(danhMucPhim.maDanhMucPhim === 'TheLoai'){
  //   //   console.log(danhMucPhim.DanhMucPhim[i].ten);
  //   // }
  // }
}