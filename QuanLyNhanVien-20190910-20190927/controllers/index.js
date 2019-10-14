/*Yêu cầu 1: Lấy thông tin từ người dùng nhập vào lưu trữ vào mangNhanVien. Hiển thị mảng nhân viên lên table bên dưới */
//Khai báo mảng nhân viên lưu trữ thông tin nhân viên
var mangNhanVien = [];
layStorage();


document.getElementById('btnThem').onclick = function () {
  //xóa dữ liệu khi người dùng bấm nút thêm nhân viên
  xoaDuLieuInput();
}

//Xây dựng chức năng thêm nhân viên cho nút button button#btnThemNV
document.getElementById('btnThemNV').onclick = function () {
  //Lấy thông tin người dùng nhập vào
  var _maNV = getValueById('msnv');
  var _hoTen = getValueById('name');
  var _email = getValueById('email');
  var _matKhau = getValueById('password');
  var _chucVu = getValueById('chucvu');
  var _ngaySinh = getValueById('datepicker');
  //Lưu thông tin người dùng vào biến nv
  var nv = new NhanVien(_maNV, _matKhau, _hoTen, _email, _ngaySinh, _chucVu);
  // console.log(nv);
  mangNhanVien.push(nv);
  console.log(mangNhanVien);
  //Gọi phương thức tạo bảng
  taoBang(mangNhanVien);
  //Lưu vào localstorage
  luuStorage();
  dongModal();
}

function taoBang(mangNV) {
  //Dựa vào mảng tạo các thẻ tr in lên giao diện (thông qua thẻ tBody có sẵn)
  var dsTheTR = '';
  for (var i = 0; i < mangNV.length; i++) {
    //Mỗi lần lặp lấy ra thông tin 1 nhân viên từ mảng nhân viên
    var nv = mangNV[i];
    //Tạo thẻ tr truyền thông tin nhân viên vào
    dsTheTR += `
        <tr>
          <td>${nv.maNV}</td>
          <td>${nv.hoTen}</td>
          <td>${nv.email}</td>
          <td>${nv.ngaySinh}</td>
          <td>${nv.chucVu}</td>
          <td>
            <button class="btn btn-danger btnXoaNV" onclick="xoaNhanVien('${nv.maNV}')">Xóa</button>
            <button class="btn btn-success" data-toggle="modal"
            data-target="#myModal" onclick="suaNhanVien('${i}')" >Sửa</button>
          </td>
        </tr>
      `
  }
  //Đưa các thẻ tr lên giao diện thông qua thẻ <tBody></tBody>
  //querySelector(selector) => dom dựa vào selector của thẻ trả ra đối tượng đầu tiên của selector
  document.querySelector('#tableDanhSach').innerHTML = dsTheTR;
}



//Hàm lấy giá trị value từ input thông qua id của thẻ
function getValueById(id) {
  return document.getElementById(id).value;
}
// -----------------------------------------
//Yêu cầu 2: Xây dựng tính năng cho nút button.btnXoaNV
function xoaNhanVien(maNV) {

  //Tìm kiếm nhanVien trong mảng dựa vào maNV
  for (var i = mangNhanVien.length - 1; i >= 0; i--) {
    //Lấy ra nhân viên trong mảng
    var nhanVien = mangNhanVien[i];
    if (nhanVien.maNV === maNV) {
      //Xóa phần tử trong mảng tại vị trí maNV tìm được
      mangNhanVien.splice(i, 1);
    }
  }
  //Gọi phương thức tạo lại bảng từ mảng mới sau khi xóa
  taoBang(mangNhanVien);
}


//Lưu dữ liệu xuống localstorage
function luuStorage() {
  //Chuyển mảng dữ liệu (mảng JSON) thành chuỗi
  var sMangNhanVien = JSON.stringify(mangNhanVien);
  //Lưu xuống localStorage(là đối tượng có sẵn của browser)
  localStorage.setItem('mangNhanVien', sMangNhanVien);
}

//Lấy dữ liệu từ localStorage
function layStorage() {
  //Lấy dữ liệu từ storage dựa vào name của storage
  if (localStorage.getItem('mangNhanVien')) { //kiểm tra storage mangNhanVien có tồn tại hay không
    var sMangNhanVien = localStorage.getItem('mangNhanVien');
    //Chuyển chuỗi thành mảng gán vào mangNhanVien hiện tại
    mangNhanVien = JSON.parse(sMangNhanVien);
    //Tạo bảng
    taoBang(mangNhanVien);
  }
}

//Yêu cầu 3: Thực hiện tính năng khi người dùng click vào nút btnSua thì dữ liệu dòng đó sẽ load lên popupModal

function suaNhanVien(index) {
  // console.log(_maNV,_hoTen,_matkhau,_email,_ngaySinh,_chucVu)
  //Dom đến các control input trên modal gán các giá trị được click vào nội dung các thẻ input đó
  //Lấy phần tử từ mảng dssv 
  var nv = mangNhanVien[index];
  document.getElementById('msnv').value = nv.maNV;
  document.getElementById('name').value = nv.hoTen;
  document.getElementById('email').value = nv.email;
  document.getElementById('password').value = nv.matKhau;
  document.getElementById('datepicker').value = nv.ngaySinh;
  document.getElementById('chucvu').value = nv.chucVu;

  //disabled thẻ input#msnv
  //setAttribute: gán giá trị attr của thẻ được dom
  //getAttribute: lấy giá trị attr của thẻ được dom
  document.getElementById('msnv').setAttribute('disabled', 'disabled');
}

//Yêu cầu 4: Xây dựng xử lý cho nút cập nhật
document.getElementById('btnCapNhat').onclick = function () {
  //Lấy thông tin người dùng lưu vào đối tượng

  //Lấy thông tin người dùng sau khi đã chỉnh sửa
  var _maNV = getValueById('msnv');
  var _hoTen = getValueById('name');
  var _email = getValueById('email');
  var _matKhau = getValueById('password');
  var _chucVu = getValueById('chucvu');
  var _ngaySinh = getValueById('datepicker');

  //Lưu thông người dùng sau khi bấm nút cập nhật
  var nhanVienCapNhat = new NhanVien(_maNV, _matKhau, _hoTen, _email, _ngaySinh, _chucVu);

  //tìm trong mảng nhân viên nào có maNV = nhanVienCapNhat.maNV
  for (var i = 0; i < mangNhanVien.length; i++) {
    if (mangNhanVien[i].maNV === nhanVienCapNhat.maNV) {
      mangNhanVien[i] = nhanVienCapNhat;
      console.log(i);
    }
  }
  //Tạo lại bảng theo mảng mới
  taoBang(mangNhanVien);
  dongModal();
  //Lưu lại vào máy 
  luuStorage();
}

function xoaDuLieuInput() {
  document.getElementById('msnv').value = '';
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('datepicker').value = '';
  document.getElementById('chucvu').value = '';
  document.getElementById('msnv').removeAttribute('disabled');
}


function dongModal() {
  //.click(): là phương thức gọi đối tượng dom đến thực thi hành động click
  document.getElementById('btnDong').click();
}

//Yêu cầu 5: Thực hiện chức năng tìm kiếm khi người dùng click vào nút #btnTimNV
document.getElementById('btnTimNV').onclick = function () {
    //Lấy thông tin người dùng nhập vào
    var tuKhoa = document.getElementById('searchName').value;
    //Gọi hàm thực hiện nghiệp vụ tìm kiếm
    var mangKQTimKiem = timKiemNhanVien(tuKhoa);
    //Tạo lại bảng mới theo mảng vừa tìm được
    taoBang(mangKQTimKiem);
}
function timKiemNhanVien(tenNhanVien) {
  /*Biến đổi chữ hoa => thường
  trim(): loại bỏ khoảng trống đầu và cuối của chuỗi
  toLowerCase(): biến đổi chuỗi hoa thành thường
  search(tukhoa): Tìm cụm từ khóa có chứa trong chuỗi thì trả về vị trí đầu tiên của cụm từ đó, nếu không tìm thấy sẽ trả về -1
  */
  tenNhanVien = tenNhanVien.toLowerCase().trim();
  //mảng nhân viên kết quả sau khi tìm kiếm
  var mangNhanVienTimKiem = [];
  //Tìm nhân viên trong mảng có tên trùng với tên người dùng nhập vào hay không 
  for (var i = 0; i < mangNhanVien.length; i++) {
    if(mangNhanVien[i].hoTen.toLowerCase().trim().search(tenNhanVien) !== -1 )
    {
        //Nếu trùng => push vào mangNhanVienTimKiem
        mangNhanVienTimKiem.push(mangNhanVien[i]);
    }
  }
  console.log(mangNhanVienTimKiem);

  return mangNhanVienTimKiem;
}



