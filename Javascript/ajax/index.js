//load: là phương thức jquery dùng để hổ trợ đọc file
// $("#content").load("./data.txt");

// GET: phương thức get dùng để đọc dữ liệu từ api hoặc file (.xml, .json)

// let getAjax = {
//     url: './CSDL/DanhSachNguoiDung.xml', // đường dẫn đến file data, hoặc api từ backend cung cấp
//     type: 'GET' // phương thức đọc dữ liệu từ file đó (hoặc dữ liệu từ api của backend cung cấp)
// }
// $.ajax(getAjax).done(renderTableNguoiDung);

// function renderTableNguoiDung(result) {
//     var content = '';
//     var dsTagNguoiDung = result.getElementsByTagName('NguoiDung');
//     for (var i = 0; i < dsTagNguoiDung.length; i++) {
//         var tagNguoiDung = dsTagNguoiDung[i];
//         var taikhoan = tagNguoiDung.getElementsByTagName('TaiKhoan')[0].innerHTML;
//         var email = tagNguoiDung.getElementsByTagName('Email')[0].innerHTML;
//         var hoten = tagNguoiDung.getElementsByTagName('HoTen')[0].innerHTML;
//         content += `<tr>
//             <td>${taikhoan}</td>
//             <td>${email}</td>
//             <td>${hoten}</td>
//         </tr>`;
//     }
//     var table = `<table class="table">
//         <thead>
//             <tr>
//                 <th>Tài Khoản</th>
//                 <th>Email</th>
//                 <th>Ho ten</th>
//             </tr>
//         </thead>
//         <tbody>
//             ${content}
//         </tbody>
//     </table>`
//     document.getElementById("content").innerHTML = table;
// }

// xử lý click cho nút btnGETJSON => lấy dữ liệu từ file JSON
document.getElementById('btnGetJSON').onclick = function () {
    var ajaxGetJson = {
        url: "./CSDL/DanhSachNguoiDung.json",
        type: 'GET'
    }
    // gọi ajax đọc file json
    $.ajax(ajaxGetJson).done(renderTableJson);
}

// viết callbackfunction hiển thị dữ liệu đọc từ file json
function renderTableJson(result) {
    var content = '';
    for (var i = 0; i < result.length; i++) {
        var nguoiDung = result[i];
        content += `<tr>
            <td>${nguoiDung.TaiKhoan}</td>
            <td>${nguoiDung.Email}</td>
            <td>${nguoiDung.HoTen}</td>
        </tr>`;
    }
    var table = `<table class="table">
        <thead>
            <tr>
                <th>Tài Khoản</th>
                <th>Email</th>
                <th>Ho ten</th>
            </tr>
        </thead>
        <tbody>
            ${content}
        </tbody>
    </table>`
    document.getElementById("content").innerHTML = table;
}