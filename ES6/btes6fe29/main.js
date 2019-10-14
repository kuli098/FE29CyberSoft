//Tạo ra table 

const renderTable = () =>{
    let contentTable = `
    <div class="card text-white bg-dark">
        <div class="card-body">
        <h4 class="card-title">Danh sách sản phẩm</h4>
            <div class='container'>
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
                <button class="btn btn-success">Thêm sản phẩm</button>
            </div>
        </div>
    </div>
    <div class="container">
        <table class="table">
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
    method:'get',//method là phương thức get, post hoặc put delete
    url: './assets/data.json'// Đường dẫn đến file json, xml hoặc là link api backend cung cấp
}).then((result)=>{//Hàm thực thi khi gọi ajax thành công
    //Kết quả trả về có dạng là result.data
    let htmlTable = result.data.reduce((contentHtml,sp,index) => {
        return contentHtml += `
            <tr>
                <td>${sp.maSP}</td>
                <td>${sp.tenSP}</td>
                <td>${sp.gia}</td>
                <td><img src="${sp.hinhAnh}" width="50" height="50" /></td>
                <td><button>Chỉnh sửa</button> <button>Xóa</button></td>
            </tr>
        `
    } , '');
    //Dom đến tbody gán innerHTML vào
    document.getElementById('tblDanhSachSanPham').innerHTML = htmlTable;
}).catch(error=>{
    console.log(error.reponse.data); //Tên lỗi khi gọi api không thành công
});