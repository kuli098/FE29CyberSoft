//yêu cầu: lấy thông tin người dùng nhập vào và lưu trữ vào mãng NhanVien. Hiển thị tên table bên dưới

// var dsnv = [];

// function themNguoiDung(){
//     // B1 lấy thông tin người dùng từ form
//     var _maNV = document.getElementById('msnv').value;
//     var _hoTenNV = document.getElementById('name').value;
//     var _email = document.getElementById('email').value;
//     var _matKhau = document.getElementById('password').value;
//     var _ngaySinh = document.getElementById('datepicker').value;
//     var _chucVu = document.getElementById('chucvu').value;

//     // B2:lưu thông tin nhân viên nhập vào đối tượng
//     var nhanVien = new NhanVien(
//         _maNV, _hoTenNV, _email, _matKhau, _ngaySinh, _chucVu
//     );

//     // B3 lưu thông tin đối tượng nhân viên vào mãng
//     dsnv.push(nhanVien);
//     console.log(dsnv);

//     // B4 dùng mảng dsnv để tạo nội dung cho table NhanVien
//     taoBang();
// }

// function taoBang(){
//     // xóa bảng trước khi tạo lại
//     document.getElementById('tableDanhSach').innerHTML = '';

//     //Dựa vào mảng dsnv => tạo n thẻ tr append vào tableDanhSach
//     for(var i = 0; i <= dsnv.length; i++){
//         // lấy ra mỗi nhân viên sau mỗi lần lặp
//         var nhanVien = dsnv[i];
//         // tạo thẻ tr
//         var tr = document.createElement("tr");
//         // tạo td maNV
//         var tdMaNV = document.createElement("td");
//         tdMaNV.innerHTML = nhanVien.maNV;
//         tr.appendChild(tdMaNV);
//         // tạo td hoTen
//         var tdHoTenNV = document.createElement("td");
//         tdHoTenNV.innerHTML = nhanVien.hoTenNV;
//         tr.appendChild(tdHoTenNV);
//         // tạo td email
//         var tdEmail = document.createElement("td");
//         tdEmail.innerHTML = nhanVien.email;
//         tr.appendChild(tdEmail);
//         // tạo td matkhau
//         var tdMatKhau = document.createElement("td");
//         tdMatKhau.innerHTML = nhanVien.matKhau;
//         tr.appendChild(tdMatKhau);
//         // tạo td maNV
//         var tdNgaySinh = document.createElement("td");
//         tdNgaySinh.innerHTML = nhanVien.ngaySinh;
//         tr.appendChild(tdNgaySinh);
//         // tạo td chucVu
//         var tdChucVu = document.createElement("td");
//         tdChucVu.innerHTML = nhanVien.chucVu;
//         tr.appendChild(tdChucVu);

//         // DOM đến thẻ tbody => gắn thẻ tr đã tạo vào
//         document.querySelector('#tableDanhSach').appendChild(tr);
//     }

// }

// Cach 2

var mangNhanVien = [];
layStorage();

document.getElementById('btnThem').onclick = function(){
    //xóa dữ liệu khi người dùng bấm nút thêm nhân viên
    xoaDuLieuInput();
}


//xây dựng chức năng thêm nhân viên cho nút button button#btnThemNV
document.getElementById('btnThemNV').onclick = function(){
    var _maNV = getvalueById('msnv');
    var _hoTenNV = getvalueById('name');
    var _email = getvalueById('email');
    var _matKhau = getvalueById('password');
    var _ngaySinh = getvalueById('datepicker');
    var _chucVu = getvalueById('chucvu');

    //lưu thông tin người dùng vào
    var nv = new NhanVien(_maNV, _hoTenNV, _email, _matKhau, _ngaySinh, _chucVu);
    console.log(nv);
    mangNhanVien.push(nv);
    //gọi phương thức tạo bảng
    taoBang(mangNV);
    // lưu vào localstorage
    xoaNhanVien();
    luuStorage();
    dongModal();
}


function taoBang(mangNV){
    // dựa vào mảng tạo thẻ tr in lên giao diện dựa vào các thẻ tbody có sẵn
    var dsTheTR ='';
    for(var i = 0 ; i < mangNV.length; i++){
        // mỗi lần thì sẽ lấy ra thông tin của 1 nhân viên từ mảng nhân viên
        var nv = mangNV[i];
        dsTheTR += `
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.hoTenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaySinh}</td>
                <td>${nv.chucVu}</td>
                <td class="d-flex">
                    <button class ="btn btn-danger btnXoaNV mr-1" onclick ="xoaNhanVien('${nv.maNV}')">Xóa</button>
                    <button class ="btn btn-success" data-toggle="modal"
                    data-target="#myModal" onclick ="suaNhanVien('${i}')">Sửa</button>
                </td>
            </tr>
        `
    }
    // đưa các thẻ tr lên giao diện thông qua thẻ tbody và trả ra dối tượng đầu tiên
    console.log(dsTheTR);
    document.querySelector('#tableDanhSach').innerHTML = dsTheTR;
}

//hàm lấy giá trị value từ input thông qua id của thẻ
function getvalueById(id){
    return document.getElementById(id).value;
}

//Yêu cầu 2: xây dựng tính năng xóa nhân viên

function xoaNhanVien(maNV){
    //tìm kiếm nhân viên trong mảng vào maNV
    for(var i = mangNhanVien.length -1; i >= 0 ; i--){
        //lấy ra nhân viên trong mảng
        var nhanVien = mangNhanVien[i];
        if(nhanVien.maNV === maNV){
            //xóa nv tại vị trí maNV tìm đc
            mangNhanVien.splice(i,1);
        }
    }
    //sau khi xóa thì tạo lại bảng từ mảng mới sau khi xóa
    taoBang(mangNV);
    luuStorage();
}

//lưu dữ liệu xuống localstorage
function luuStorage(){
    //chuyển mảng dữ liệu (mảng JSON) thành chuỗi
    var sMangNhanVien = JSON.stringify(mangNhanVien);
    //lưu xuống localstorage(là đối tượng có sẵn của browser)
    localStorage.setItem('mangNhanVien',sMangNhanVien);
}

//lấy dữ liệu từ localstorage
function layStorage(){
    //lấy dữ liệu từ storage dựa vào name cảu storage
    if(localStorage.getItem('mangNhanVien')){//kiểm tra storage mangNhanVien có tồn tại hay không
        var sMangNhanVien = localStorage.getItem('mangNhanVien'); //chuyển chuỗi thành mảng và gán vào mangNhanVien
        mangNhanVien = JSON.parse(sMangNhanVien);
        // tạo bảng
        taoBang();
    }
}

//Yêu cầu 3: thực hiện tính năng khi người dùng click vào btnSua thì dữ liệu dòng đó sẽ load lên popupModal

function suaNhanVien(index){
    //Dom ddeens cacs control input trên modal gán các giá trị đc click vào nội dung các thẻ
    //lấy phần tử trừ mảng danhSachNhanVien
    var nv = mangNhanVien[index]
    document.getElementById('msnv').value = nv.maNV;
    document.getElementById('name').value = nv.hoTenNV;
    document.getElementById('email').value = nv.email;
    document.getElementById('password').value = nv.matKhau;
    document.getElementById('datepicker').value = nv.ngaySinh;
    document.getElementById('chucvu').value = nv.chucVu;

    //disabled thẻ input #msnv
    //setAttribute: hàm gán giá trị của thẻ đc dom
    //getAttribute: hàm lấy giá trị của thẻ đc dom
    document.getElementById('msnv').setAttribute('disabled','disabled');
}

//Yêu cầu 4: xây dựng sử lý cho nút cập nhật
document.getElementById('btnCapNhat').onclick = function(){
    //lấy thông tin người dùng lưu vào đối tượng
    var _maNV = getvalueById('msnv');
    var _hoTenNV = getvalueById('name');
    var _email = getvalueById('email');
    var _matKhau = getvalueById('password');
    var _ngaySinh = getvalueById('datepicker');
    var _chucVu = getvalueById('chucvu');

    //lưu người dùng sau khi bấm bút cập nhật
    var capNhatNV = new NhanVien(_maNV, _hoTenNV, _email, _matKhau, _ngaySinh, _chucVu);
    console.log(capNhatNV);
    //Cập nhật nhân viên
    for(var i = 0; i < mangNhanVien.length; i++){
        //lấy ra nhân viên trong mảng
        var nv = mangNhanVien[i];
        if(nv.maNV === capNhatNV.maNV){
            //cập nhật nhân viên tại vị trí i
            mangNhanVien[i] = capNhatNV;
        }
    }
    taoBang();
    luuStorage();
    dongModal();
}

function xoaDuLieuInput(){
    document.getElementById('msnv').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value ='';
    document.getElementById('password').value = '';
    document.getElementById('datepicker').value = '';
    document.getElementById('chucvu').value = '';
    document.getElementById('msnv').removeAttribute('disabled');
}

function dongModal(){
    //click là phương thức gọi đối tượng dom đến
    document.getElementById('btnDong').click();
}

//yêu cầu 5:thực hiện chức năng tìm kiếm
document.getElementById('btnTimNV').onclick = function(){
    //lấy thông tin người dùng nhập vào
    var tukhoa = document.getElementById('searchName').value;
    //gọi hàm thực hiện nghiệp vụ tìm kiếm
    mangNhanVien = timKiemNhanVien(tukhoa);

    // tạo lại bảng mới theo mảng vừa tìm đc
    taoBang();
}

function timKiemNhanVien(tenNV){
    // toLowerCase(): biến đổi chuỗi hoa thành thường
    // trim(): loại bỏ khoảng trống đầu và cuối chuỗi
    // search(tukhoa): tìm cụm từ khóa có chứa trong chuỗi khi trả về vị trí đầu tiên của cụm từ đó, nếu không thấy sẽ trả về -1
    tenNV = tenNV.toLowerCase().trim();
    var mangNhanVienTimKiem = [];
    for(var i=0; i < mangNhanVien.length; i++){
        if(mangNhanVien[i].hoTenNV.toLowerCase().trim().search(tenNV) !== -1){
            mangNhanVienTimKiem.push(mangNhanVien[i]);
        }
    }
    //Tìm nhân viên trong mảng có tên trùng với tên người dùng nhập vào hay không
    //nếu trùng thì push vào mangNhanVienTimKiem
    return mangNhanVienTimKiem;
}

