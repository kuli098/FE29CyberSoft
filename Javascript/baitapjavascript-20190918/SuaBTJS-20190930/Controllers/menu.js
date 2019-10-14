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

// $.ajax({
//   url: "../Data/menu.json",
//   type: "GET"
// }).done(renderNav);

// function renderNav(result){  
//   var menu = "";
//   for(var i = 0; i < result.length; i++){
//     var theLoai = result[i];
//     var tenTheLoai = theLoai.tenDanhMucPhim;
//     var danhMucPhim = theLoai.DanhMucPhim;
//     var listLi = "";
//     for(var j = 0; j < danhMucPhim.length; j++){
//       var danhMuc = danhMucPhim[j];
//       var ten = danhMuc.ten;
//       listLi +=`<li><a href="">${ten}</a></li>`
//     }
//     menu +=`
//         <li>
//           <a href="">${tenTheLoai}</a>
//           <ul class="sub">
//             ${listLi}            
//           </ul>
//         </li>
//     `
//   }
//   document.getElementById("nav").innerHTML = menu;  
// }
var menu = new Menu();
$.ajax({
  url: '../Data/menu.json',
  type: 'GET'
}).done(function (result) {
  menu.mangDanhMuc = result;
  renderMenu();
  renderTable();
})

function renderMenu() {

  var contentMenu = menu.renderMenu();
  // console.log(contentMenu);
  document.getElementById('menu').innerHTML = contentMenu;
}

function renderTable() {
  var contentTable = menu.renderTable();
  // console.log(contentTable);
  document.getElementById("tblDanhMucPhim").innerHTML = contentTable;
}

document.getElementById("btnThemDanhMuc").onclick = function () {
  var ma = document.getElementById("MaDanhMuc").value;
  var ten = document.getElementById("TenDanhMuc").value;
  menu.mangDanhMuc.push({
    maDanhMucPhim: ma,
    tenDanhMucPhim: ten,
    DanhMucPhim: []
  })
  renderTable();
  renderMenu();
}

function xoaDM(maDM) {
  menu.xoaDanhMuc(maDM);
  renderTable();
}

function xoaDMIndex(i) {
  menu.xoaDanhMucIndex(i);
  renderTable();
}
function suaDM(i) {
  menu.suaDanhMuc(i);
}
document.getElementById("btnLuu").onclick = function () {
  menu.capNhatDanhMuc();
  renderTable();
  renderMenu();
}

// function menuItem(maDM){
//   var content = menu.layDanhMucCon(maDM);
//   document.getElementById("menuCon").innerHTML= content;
//   renderTableCon(maDM);
// }

// function renderTableCon(maDM){
//   var tableCon = menu.renderTableCon(maDM);
//   document.getElementById("tblDanhMucPhimCon").innerHTML = tableCon;
// }

function renderModalTablePhim(maDanhMucPhim) {
  var mangDanhMucPhim = menu.layDanhMucPhim(maDanhMucPhim);
  // console.log(mangDanhMucPhim);
  var contentTableCon = menu.renderTableCon(mangDanhMucPhim, maDanhMucPhim);
  document.getElementById("tblDanhMucPhimCon").innerHTML = contentTableCon;
  // console.log(contentTableCon);
  //Thêm mã danh mục vào nút thêm nhân viên
  document.getElementById('btnThemDanhMucCon').setAttribute("onclick", `themDanhMucCon('${maDanhMucPhim}')`);
  document.getElementById("btnCapNhatDanhMucCon").setAttribute("onclick", `capNhatDanhMucCon('${maDanhMucPhim}')`);
}



function themDanhMucCon(maDanhMucPhim) {
  var ma = document.getElementById('ma').value;
  var ten = document.getElementById('ten').value;
  menu.themMenuCon(maDanhMucPhim, ma, ten);
  renderMenu();
  renderTable();
  renderModalTablePhim(maDanhMucPhim);
}



function xoaMenuItem(ma, maDanhMucPhim) {
  menu.xoaMenuCon(ma);
  renderMenu();
  renderTable();
  renderModalTablePhim(maDanhMucPhim);
}


function suaMenuItem(ma, ten, maDanhMucPhim) {
  document.getElementById("ma").setAttribute("disabled", "disabled");
  document.getElementById("ma").value = ma;
  document.getElementById("ten").value = ten;

  document.getElementById('btnCapNhatDanhMucCon').setAttribute('maDanhMucPhim', maDanhMucPhim)

}

function capNhatDanhMucCon(maDanhMucPhim) {
  console.log(maDanhMucPhim)
  var ma = document.getElementById("ma").value;
  var ten = document.getElementById("ten").value;
  menu.capNhatMenuCon(ma, ten);
  renderMenu();
  renderTable();
  renderModalTablePhim(maDanhMucPhim);
}

