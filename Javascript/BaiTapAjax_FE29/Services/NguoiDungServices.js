//B1: xây dựng phương thức kết nối API
function NguoiDungServices(){
    this.layDanhSachNguoiDung = function(){
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/quanlytrungtam/danhsachnguoidung',
            type: 'GET'
        })
    }
}