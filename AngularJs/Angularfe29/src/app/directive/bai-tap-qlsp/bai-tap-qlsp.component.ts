import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tap-qlsp',
  templateUrl: './bai-tap-qlsp.component.html',
  styleUrls: ['./bai-tap-qlsp.component.scss']
})
export class BaiTapQlspComponent implements OnInit {
  productsArr: { MaSP: string, TenSP: string, Gia: number }[] = [
    { MaSP: "1", TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: "2", TenSP: "Sony XZ2", Gia: 1000 },
    { MaSP: "3", TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: "4", TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: "5", TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: "6", TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: "7", TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: "8", TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: "9", TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: "10", TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: "11", TenSP: "Nokia X9", Gia: 1000 },];
  currentPage = 1;
  constructor() { }

  ngOnInit() {
  }
  addProductHandler(maSP: string, tenSP: string, gia: string): void {
    const newProduct = {
      MaSP: maSP,
      TenSP: tenSP,
      Gia: +gia // thêm dấu cộng để chuyển từ kiểu string sang number
    }
    // kiem tra san pham co ton tai chua
    const index = this.productsArr.findIndex((item => item.MaSP === maSP))
    if (index !== -1) {
      alert('san pham da ton tai');
      return;
    }
    this.productsArr.push(newProduct);
    console.log(this.productsArr);
  }
  deleteProductHandler(maSP: string): void {
    const index = this.productsArr.findIndex((item => item.MaSP === maSP))
    if (index !== -1) {
      this.productsArr.splice(index, 1)
    }
  }
}
