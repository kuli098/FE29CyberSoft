//prototype es5
// function SinhVien(ma,ten){
//     this.maSV=ma;
//     this.tenSV=ten;
//     this.xuatThongTinSinhVien = function(){
//         console.log("ma:"+ this.maSV);
//         console.log("ten:"+ this.tenSV);
//     }
// }

//prototype es6
// class NhanVien {
//     ma;ten;
//     constructor(ma,ten){
//         this.ma = ma;
//         this.ten = ten;
//     }
//     laythongTinNhanVien(){
//         console.log(`"ma:" ${this.ma} ten ${this.ten}`);
//     }
// }

// class GiamDoc extends NhanVien{
//     quyen;
//     constructor(ma,ten,quyen){
//         super(ma,ten);
//         this.quyen = quyen;
//     }
//     laythongTinNhanVien(){
//         super.laythongTinNhanVien();
//         console.log(this.quyen);
//     }
// }