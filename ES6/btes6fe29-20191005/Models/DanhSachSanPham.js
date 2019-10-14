export class DanhSachSanPham {
    mangSP = [];
    constructor() {
        // this.mangSP = new Array();
    }
    renderTRSanPham() {
        let content = '';
        content = this.mangSP.reduce((trContent, sp, index, mangSP) => {
            trContent = trContent + `
        <tr>
            <td>${sp.maSP}</td>
            <td>${sp.tenSP}</td>
            <td>${sp.gia}</td>
            <td><img src="${sp.hinhAnh}" width="50" height="50" /></td>
            <td><button class="btn btn-success" data-index="${index}" onclick="suaSP('${index}')">Chỉnh sửa</button> <button class="btn btn-danger" id="btnXoa">Xóa</button></td>
        </tr>`;
            return trContent;
        }, '');
        return content;
    }
    themSanPham(sanPham) {
        // this.mangSP.push(sanPham); //ES5
        this.mangSP = [...this.mangSP, sanPham]; //ES6
    }
    timViTriSanPham(maSP) {
        for (let vitri in this.mangSP) {
            if (this.mangSP[vitri].maSP === maSP) {
                return vitri;
                break;
            }
        }
    }
    timSanPhamTheoMa(maSP) {
        for (let sanPham of this.mangSP) {
            if (sanPham.maSP === maSP) {
                return sanPham;
                break;
            }
        }
    }
    xoaSanPham(maSP) {
        let vitri = this.timViTriSanPham(maSP);
        this.mangSP.splice(vitri, 1);
    }
    // suaSanPham(sanPham) {
    //     let vitri = this.timSanPhamTheoMa(sanPham.maSP);
    //     this.mangSP[vitri] = sanPham;
    // }
    timSanPhamTheoTen(tenSP) {
        let dskq = new DanhSachSanPham();
        tenSP = tenSP.trim().toUpperCase();

        for (let sanPham of this.mangSP) {
            let tenSanPham = sanPham.tenSP.trim().toUpperCase();
            if (tenSanPham.search(tenSP) !== -1) {
                dskq.mangSP = [...dskq.mangSP, sanPham];
            }
        }
        return dskq;
    }
    suaSanPham = (index) => {
        let sp = this.mangSP[index];

        document.getElementById('maSP').value = sp.maSP;
        document.getElementById('tenSP').value = sp.tenSP;
        document.getElementById('gia').value = sp.gia;
        document.getElementById('hinhAnh').value = sp.hinhAnh;
    }
    capNhatSanPham =()=>{
        let ma = document.getElementById('maSP').value;
        let ten = document.getElementById('tenSP').value;
        let gia = document.getElementById('gia').value;
        let hinhAnh = document.getElementById('hinhAnh').value;

        for(let sanPham in this.mangSP){
            let sp = this.mangSP[sanPham];
            if(ma === sp.maSP){
                sp.tenSP = ten;
                sp.gia = gia;
                sp.hinhAnh = hinhAnh;
            }
        }
    }
}