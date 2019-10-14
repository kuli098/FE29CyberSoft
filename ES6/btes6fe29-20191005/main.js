
import { DanhSachSanPham } from './Models/DanhSachSanPham.js';
import { SanPham } from './Models/SanPham.js';
// let sanPham = new SanPham();
let danhSachSP = new DanhSachSanPham();

//Tạo ra table
const renderTable = () => {
    let contentTable = `
    <div class="card text-white bg-dark">
        <div class="card-body">
        <h4 class="card-title">Danh sách sản phẩm</h4>
            <div class='container'>
                <input id="inputSearch" class="form-control mr-sm-2 mb-3" type="search" placeholder="Search" aria-label="Search"/>
                <div class="row">
                    <div class="col-md-3">
                        <input id="maSP" class="form-control" placeholder="Mã SP" />
                    </div>
                    <div class="col-md-3">
                        <input id="tenSP" class="form-control" placeholder="Tên SP" />
                    </div>
                    <div class="col-md-3">
                        <input id="gia" class="form-control"  placeholder="Giá"/>
                    </div>
                    <div class="col-md-3">
                        <input id="hinhAnh" class="form-control" placeholder="Link hình" />
                    </div>
                </div>
                <br />
                <button class="btn btn-success" id="btnThemSanPham">Thêm sản phẩm</button>
                <button class="btn btn-success" id="btnCapNhatSanPham">Cập nhật sản phẩm</button>
            </div>
        </div>
    </div>
    <div class="container">
        <table class="table" id="table">
            <thead>
                <tr>
                    <th>Mã SP</th>
                    <th>Tên SP</th>
                    <th>Giá </th>
                    <th>Hình ảnh</th>
                    <th></th>
                </tr>
            </thead>
        <tbody id="tblDanhSachSanPham">
        </tbody>
        </table>
    </div>
    `;
    document.getElementById('root').innerHTML += contentTable;
}
renderTable();
//Đọc file json hoặc gọi api
axios({
    method: 'get',//method là phương thức get, post hoặc put delete
    url: './assets/data.json'// Đường dẫn đến file json, xml hoặc là link api backend cung cấp
}).then((result) => {//Hàm thực thi khi gọi ajax thành công
    //Kết quả trả về có dạng là result.data
    danhSachSP.mangSP = result.data;
    //Dom đến tbody gán innerHTML vào
    document.getElementById('tblDanhSachSanPham').innerHTML = danhSachSP.renderTRSanPham();
    console.log(danhSachSP.mangSP);
}).catch(error => {
    console.log(error.reponse.data); //Tên lỗi khi gọi api không thành công
});

//Thêm sản phẩm mới
document.getElementById('btnThemSanPham').addEventListener("click", () => {
    let maSP = document.getElementById('maSP').value;
    let tenSP = document.getElementById('tenSP').value;
    let gia = document.getElementById('gia').value;
    let hinhAnh = document.getElementById('hinhAnh').value;

    let sanPhamMoi = new SanPham(maSP, tenSP, gia, hinhAnh);
    danhSachSP.themSanPham(sanPhamMoi);
    document.getElementById('tblDanhSachSanPham').innerHTML = danhSachSP.renderTRSanPham();
    swal({
        title: "Thêm Sản Phẩm Thành Công!",
        // text: "Nhấn vào nút để thoát!",
        icon: "success",
        button: "Thoát",
    });
    console.log(danhSachSP);
});

// Tìm kiếm theo tên
document.getElementById('inputSearch').addEventListener("keyup", ()=>{
    let tuKhoa = document.getElementById('inputSearch').value;
    let dskq = danhSachSP.timSanPhamTheoTen(tuKhoa);
    document.getElementById('tblDanhSachSanPham').innerHTML = dskq.renderTRSanPham();
})

// Sửa Sản phẩm
suaSP = (index)=>{
    danhSachSP.suaSanPham(index);
}


// suaSanPham = (idButton) => {
//     document.getElementById(idButton).addEventListener("click", () => {
//         let id = idButton;
//         let mangTam = id.split("_");
//         let maSP = mangTam[1];

//         let sp = danhSachSP.timSanPhamTheoMa(maSP);

//         document.getElementById('maSP').value = maSP;
//         document.getElementById('tenSP').value = sp.tenSP;
//         document.getElementById('gia').value = sp.gia;
//         document.getElementById('hinhAnh').value = sp.hinhAnh;
//         document.getElementById('tblDanhSachSanPham').innerHTML = dskq.renderTRSanPham();
//     })
// }















