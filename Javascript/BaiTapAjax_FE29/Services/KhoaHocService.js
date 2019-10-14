function KhoaHocService(){
    this.layDanhSachKhoaHoc = function (){
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/quanlytrungtam/danhsachkhoahoc',
            type: 'GET'
        });
    }
    this.themKhoaHoc = function(khoaHoc){
        return $.ajax({
            url: 'http://svcy.myclass.vn/api/quanlytrungtam/themkhoahoc',
            type: 'POST',
            data: khoaHoc,
            dataType: 'json'
        })
    }
    this.xoaKhoaHoc = function(maKhoaHoc){
        return $.ajax({
            url: `http://svcy.myclass.vn/api/quanlytrungtam/xoakhoahoc/${maKhoaHoc}`,
            type: 'DELETE'
        })
    }
}
