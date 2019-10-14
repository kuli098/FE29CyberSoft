import {NhanVien} from  './NhanVien.js'
export class GiamDoc extends NhanVien{
    quyen;
    constructor(ma,ten,quyen){
        super(ma,ten);
        this.quyen = quyen;
    }
    laythongTinNhanVien(){
        super.laythongTinNhanVien();
        console.log(this.quyen);
    }
}