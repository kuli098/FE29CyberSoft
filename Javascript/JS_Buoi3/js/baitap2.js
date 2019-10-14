var dssv = [];

var div = document.getElementsByClassName('container-fluid')[0];

function themSinhVien() {
  //B1: Lấy thông tin người dùng nhập vào từ form
  var _maSV = document.getElementById("txtMaSV").value;
  var _hoTenSV = document.getElementById("txtTenSV").value;
  var _loaiSV = document.getElementById("loaiSV").value;
  var _diemToan = parseInt(document.getElementById("txtDiemToan").value);
  var _diemLy = parseInt(document.getElementById("txtDiemLy").value);
  var _diemHoa = parseInt(document.getElementById("txtDiemHoa").value);
  var _diemRenLuyen = parseInt(
    document.getElementById("txtDiemRenLuyen").value
  );
  //B2: Lưu thông tin người dùng nhập vào đối tượng
  var sinhVien = new SinhVien2(
    _maSV,
    _hoTenSV,
    _loaiSV,
    _diemToan,
    _diemLy,
    _diemHoa,
    _diemRenLuyen
  );

  //Bước 2.1: Kiểm tra rổng 
  if (kiemTraRong(_maSV) || kiemTraRong(_hoTenSV) || kiemTraRong(_loaiSV) || kiemTraRong(_diemToan) || kiemTraRong(_diemLy) || kiemTraRong(_diemHoa) || kiemTraRong(_diemRenLuyen)) {
    alert('Hãy điền đầy đủ thông tin trước khi xác nhận!');
    //dừng chương trình
    return;
  }
  //Kiểm tra độ dài ký tự
  if (kiemTraDoDai(_maSV, 4, 4)) {
    alert('Mã số phải 4 chữ số!');
    //dừng chương trình
    return;
  }

  if (kiemTraDoDai(_hoTenSV, 6, 32)) {
    alert('Họ tên phải từ 6 - 32 ký tự!'); 
    //dừng chương trình
    return;
  }
  //Kiểm tra email 
  if(kiemTraEmail(_hoTenSV))
  {
    alert('Họ tên phải đúng định dạng test@gmail.com !');
    return;
  }

  //B3: Lưu thông tin đối tượng sinhVien vào mảng
  dssv.push(sinhVien);
  console.log(dssv);
  //B4: Dùng mảng dssv để tạo nội dung cho table SinhVien
  taoBang();
}

function taoBang() {

  //Xóa bảng trước khi tạo lại
  document.getElementById('tbodySinhVien').innerHTML = '';

  //Dựa vào mảng dssv => tạo n thẻ tr append vào tBodySinhVien

  for (var i = 0; i < dssv.length; i++) {
    //Lấy ra mỗi sinhVien sau mỗi lần lặp
    var sinhVien = dssv[i];
    //Tạo thẻ tr 
    var tr = document.createElement("tr");

    // Tạo td mã SV
    var tdMaSV = document.createElement("td");
    tdMaSV.innerHTML = sinhVien.maSV;
    tr.appendChild(tdMaSV);

    // tạo td tên SV
    var tdHoTenSV = document.createElement("td");
    tdHoTenSV.innerHTML = sinhVien.hoTenSV;
    tr.appendChild(tdHoTenSV);

    // tạo td loại SV
    var tdLoaiSV = document.createElement("td");
    tdLoaiSV.innerHTML = sinhVien.loaiSV;
    tr.appendChild(tdLoaiSV);

    // tạo td điểm TB SV
    var diemTB = sinhVien.tinhDiemTrungBinh();
    var tdDiemTB = document.createElement("td");
    tdDiemTB.innerHTML = diemTB;
    tr.appendChild(tdDiemTB);

    // tạo td xếp loại SV
    var tdDiemRenLuyen = document.createElement("td");
    tdDiemRenLuyen.innerHTML = sinhVien.diemRenLuyen;
    tr.appendChild(tdDiemRenLuyen);
    //Dom đến thẻ tBody.tbodySinhVien => gắn thẻ tr vừa tạo vào
    document.querySelector('#tbodySinhVien').appendChild(tr);
  }
}

function timSinhVienDiemCaoNhat(dsSinhVien) { //input mảng SinhVien
  var sinhVienDiemCaoNhat = dsSinhVien[0];
  for (var i = 0; i < dsSinhVien.length; i++) {
    var sinhVien = dsSinhVien[i];
    //Tính điểm trung bình
    if (sinhVien.tinhDiemTrungBinh() >= sinhVienDiemCaoNhat.tinhDiemTrungBinh()) {
      //Nếu sinh viên nào có dtb cao hơn sinhVienDiemCaoNhat => sinhVienDiemCaoNhat = sinhVien đó
      sinhVienDiemCaoNhat = sinhVien;
    }
  }

  //output
  return sinhVienDiemCaoNhat;
}

//Chức năng: Tìm sinh viên có DTB cao nhất
document.querySelector('#btnTimSV').onclick = function () {

  var svDiemCaoNhat = timSinhVienDiemCaoNhat(dssv);
  console.log(svDiemCaoNhat);
  //Cách 1: createElement => set giá trị thuộc tính
  // var tagP = document.createElement('p');
  // tagP.innerHTML = 'Họ tên:' + svDiemCaoNhat.hoTenSV;

  // document.querySelector('.modal-body').appendChild(tagP);
  //Cách 2: Tạo chuỗi và + chuỗi nội dung 
  // var tagP = '<p>'+svDiemCaoNhat.hoTenSV+'</p>';
  // document.querySelector('.modal-body').innerHTML = tagP;  
  //Cách 3: Dùng stringTemplate tính năng chỉ support browser nào hổ trợ biên dịch js (ES6)
  //stringTemplate (Tính năng của ES6)
  var thongTinSinhVien = `
    <p><b>Họ tên: </b> ${svDiemCaoNhat.hoTenSV}</p>
    <p><b>Điểm toán: </b> ${svDiemCaoNhat.diemToan}</p>
    <p><b>Điểm lý: </b> ${svDiemCaoNhat.diemLy}</p>
    <p><b>Điểm hóa: </b> ${svDiemCaoNhat.diemHoa}</p>
    <p><b>Điểm TB: </b> ${svDiemCaoNhat.tinhDiemTrungBinh()}</p>
  `;
  //Dom đến modal-body thay đổi nội dung
  document.querySelector('.modal-title').innerHTML = 'Thông tin sinh viên có điểm tb cao nhất';
  document.querySelector('.modal-body').innerHTML = thongTinSinhVien;
}

//Kiểm tra tính hợp lệ của đầu vào dữ liệu
// 1/ Kiểm tra rổng
function kiemTraRong(value) {
  if (value === '') {
    return true;
  }
  return false;
}
// 2/ Kiểm tra độ dài ký tự
function kiemTraDoDai(value, minlength, maxlength) {
  if (value.length > maxlength || value.length < minlength) {
    return true;
  }
  return false;
}
// 3/ Kiểm tra theo định dạng
function kiemTraEmail (value){
  var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; //Lấy từ trên mạng (tìm kiếm với từ khóa regex + Email, phone, ...)
  if(!regex.test(value))
  {
    return true; //Nếu sai định dạng thì trả về true
  }
  return false; //Đúng định dạng trả về false
}

