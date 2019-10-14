export class NhanVien {
    ma;ten;
    constructor(ma,ten){
        this.ma = ma;
        this.ten = ten;
    }
    laythongTinNhanVien(){
        console.log(`"ma:" ${this.ma} ten ${this.ten}`);
    }
}