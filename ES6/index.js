// /*
// let title = 'cybersoft';


// if(true){
//     let title = 'frontend 29';
//     console.log(title);
// }
// console.log(title);*/

// var mangButton = document.getElementsByTagName('button');
// // dinh nghia su kien onclick cho 3 nut button

// for (let i = 0; i < mangButton.length; i++) {
//     var button = mangButton[i];
//     button.onclick = function () {
//         alert(i + 1);
//     }
// }

// //hang so
// // const pi = 3.14;
// // pi = 5;

// // const sinhVien = {ma:1, ten:'nhan'};
// // const sinhVien1 = {ma:2, ten:'nnn'};
// // sinhVien.ma = sinhVien1.ma;
// // sinhVien.ten = sinhVien1.ten;


// // arrow function

// //function es5
// function showMessage(title) {
//     alert(title);
// }

// //function es6
// let showMessageES6 = (title) => {
//     alert(title);
// }

// //function 1 lenh return
// //function es5
// function hello() {
//     return hello + 'Nguyen van a';
// }

// //function es6
// let Helloes6 = () => 'hello Nguyen van a';
// let result = Helloes6;
// console.log(Helloes6(result));

// //xay dung mang dua tren function es5
// var hocVien = {
//     hoten: 'Nguyen van a',
//     lop: 'frontend29',
//     layThongTinHocVien: function () {
//         function hienThiThongTin() {
//             console.log(`Ho ten: ${this.hoten} - lop: ${this.lop}`)
//         }
//         hienThiThongTin();
//     }
// }
// hocVien.layThongTinHocVien();


// //xay dung mang dua tren function es6
// let hocVien1 = {
//     hoten: 'Nguyen van a',
//     lop: 'frontend29',
//     layThongTinHocVien: function () {
//         hienThiThongTin = () => {
//             console.log(`Ho ten: ${this.hoten} - lop: ${this.lop}`)
//         }
//         hienThiThongTin();
//     }
// }
// hocVien1.layThongTinHocVien();

// //rest params

// function tinhTong(...restP) { //restParam nhan vao khong gioi han tham so
//     if (restP.length = 2) {
//         //xu ly
//     }
//     else if (restP.length.length = 3) {
//         // xu ly
//     }
//     console.log('Tong=', restP)
// }
// tinhTong(1, 2, 3);

// let a = { ma: 1, ten: 'nguyen van a' };
// let b = { ...a, lop: '16DTHC1' }; // sao chep doi tuong a, tuong tu toan tu new, co the them thuoc tinh
// b.ten = 'nguyen b';

// console.log('a:', a);
// console.log('b:', b);

// // với mảng

// function demo() {
//     let mangA = [1, 2, 3];
//     // let mangB = [...mangA];
//     // mangB.push(5);
//     // thay vi su dung 3 dong lenh thi ta co the su dung
//     return [...mangA,5];
//     // console.log('mangA', mangA);
//     // console.log('mangB', mangB);
// }

// function getInfo (ten = 'nhan', namsinh = 1998, tuoi='22'){
//     console.log(ten,namsinh,tuoi);
// }
// getInfo('Vinh');

//tuple: du lieu object the hien duoi dang mang
// bóc tách object

// var peolpe ={
//     name: 'nhan',
//     age: 18,
// };
// // lấy thuộc tính => tạo ra biến
// var {name,age} = peolpe;

// console.log(name,age);

// var tdName = `<td>${name}</td>`;
// var tdAge = `<td>${age}</td>`;

// let propMa = 'ma';
// let propTen = 'ten';

// khai báo thuộc tính động từ giá trị tham số

// let sinhVien = {
//     [propMa]:1,
//     [propTen]:'nhan'
// }
// console.log(sinhVien)

// //gán giá trị => tạo thuộc tính ngắn gọn

// let maSP ='111';
// let tenSP = 'Iphone 5';

// let sanPham = {
//     maSP,
//     tenSP,
// }
// console.log(maSP,tenSP);

//For in: dùng để duyệt mảng dưới dạng object
// let listFriend = ["nhan","vinh","tuan","thai"];
// for(let index in listFriend){
//     console.log(index);
// }

// //For of: mỗi lần duyệt lấy ra 1 đối tượng trong mảng thường dùng duyệt mảng
// for(let name of listFriend){
//     console.log(name);
// }

import {GiamDoc} from './Models/GiamDoc.js';
let gd = new GiamDoc();
gd.ma='1';
gd.ten='Nhan';
gd.quyen='GD';
gd.laythongTinNhanVien();

/* 1 file chỉ có thể export nhiều lần và chỉ có thể export default 1 lần và không thể export default khi 1 file có nhiều class
*/
