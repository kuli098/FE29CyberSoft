

// //GET: Phương thức GET dùng để đọc dữ liệu từ api hoặc file (.xml, .json)
//Đọc file XML

/*var getAjax = {
  url: './CSDL/DanhSachNguoiDung.xml', // Đường dẫn đến file data, hoặc api từ backend cung cấp
  type: 'GET' //Phương thức đọc dữ liệu từ file đó (hoặc đọc dữ liệu từ api của backend cung cấp)
}

$.ajax(getAjax).done(renderTableNguoiDung);
//Callback function
function renderTableNguoiDung(result) {
  var content = '';
  var dsTagNguoiDung = result.getElementsByTagName('NguoiDung');
  //Duyệt các thẻ người dùng
  for (var i = 0; i < dsTagNguoiDung.length; i++) {
    var tagNguoiDung = dsTagNguoiDung[i];
    var taiKhoan = tagNguoiDung.getElementsByTagName('TaiKhoan')[0].innerHTML;
    var email = tagNguoiDung.getElementsByTagName('Email')[0].innerHTML;
    var hoTen = tagNguoiDung.getElementsByTagName('HoTen')[0].innerHTML;
    content += `<tr><td> ${taiKhoan} </td>
                <td>${email}</td>
                <td>${hoTen}</td></tr>
    `;
  }
  var table = `<table class="table">
  <thead>
    <tr>
      <th>Tài khoản</th>
      <th>Email</th>
      <th>Họ tên</th>
    </tr>
  </thead>
  <tbody>
        ${content}
  </tbody>
</table>`
  document.getElementById("content").innerHTML = table;
}*/


//Xử lý click cho nút btnGETJSON => Lấy dữ liệu từ file json
document.getElementById('btnGETJSON').onclick = function () {
  var ajaxGetJson = {
    url: './CSDL/DanhSachNguoiDung.json',
    type: 'GET'
  }
  //Gọi ajax đọc file json
  $.ajax(ajaxGetJson).done(renderTableJson);
}

//Viết callbackfunction hiển thị dữ liệu đọc từ file json
function renderTableJson(result) {
  //Result trả về 1 mảng người dùng
  var content ='';
  for (var i = 0; i < result.length; i++) {
      var nguoiDung = result[i];
      //Tạo thẻ tr từ nội dung người dùng
      content += `
        <tr>
          <td>${nguoiDung.TaiKhoan}</td>
          <td>${nguoiDung.Email}</td>
          <td>${nguoiDung.HoTen}</td>
        </tr>
      `
  }
  var table = `<table class="table">
  <thead>
    <tr>
      <th>Tài khoản</th>
      <th>Email</th>
      <th>Họ tên</th>
    </tr>
  </thead>
  <tbody>
        ${content}
  </tbody>
</table>`

  document.getElementById("content").innerHTML = table;
}

/*
// POST AJAX
document.getElementById('btnThemNguoiDung').onclick = function () {
  //lấy thông tin ng dùng nhập vào input tag
  //tạo đối tượng chứa thông tin người dùng
  var nguoiDung = {
    TaiKhoan: document.getElementById("TaiKhoan").value,
    MatKhau: document.getElementById("MatKhau").value,
    HoTen: document.getElementById("HoTen").value,
    Email: document.getElementById("Email").value,
    SoDT: document.getElementById("SoDT").value
  }
  //gọi ajax post dữ liệu lên server
  $.ajax({
    url: 'http://svcy.myclass.vn/api/ajax/adduser',
    method: 'POST',
    data: nguoiDung // data: là giá trị post lên server
  }).done(function (result) {
    console.log(result);
    getUser();
  }).fail(function (error) {
    console.log(error)
  })
  console.log(nguoiDung)
}

//yêu cầu: get data từ thông tin sau
//Type:GET
//url: 'http//sv.myclass.vn/api/ajax/getusers'
//hiển thị dữ liệu ra table

function getUser() {
  $.ajax({
    type: 'GET',
    url: 'http://svcy.myclass.vn/api/ajax/getusers'
  }).done(function (result) {
    taoBang(result);
  }).fail(function (error) {
    console.log(error)
  })
}
function taoBang(mangNguoiDung) {
  // tao table
  var tbody = ''
  for (var i = 0; i<mangNguoiDung.length; i++) {
    var nguoiDung = mangNguoiDung[i];
    tbody +=
    `
    <tr>
      <td>${nguoiDung.TaiKhoan}</td>
      <td>${nguoiDung.Email}</td>
      <td>${nguoiDung.HoTen}</td>
      <td>${nguoiDung.MatKhau}</td>
      <td>${nguoiDung.SoDT}</td>
    </tr>
    `
  }
  var table = `<table class="table">
  <thead>
      <tr>
        <th>Tài khoản</th>
        <th>Email</th>
        <th>Họ tên</th>
        <th>Mật Khẩu</th>
        <th>Số ĐT</th>
      </tr>
  </thead>
    <tbody>
          ${tbody}
    </tbody>
  </table>`;
  document.getElementById('content').innerHTML = table;
}*/










