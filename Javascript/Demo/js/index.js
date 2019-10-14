console.log("Cybersoft");
var name = "Cybersoft";
console.log('troc khi doi:', name);
name = "teo";
console.log('sau khi doi:', name);
var number1 = "12";
console.log(number1);

var number2 = "10";
console.log(number2);

console.log("doi qua so")

//switch case
var season = "ha";
switch (season) {
    case "xuan":
        console.log("Mùa Xuân");
        break;
    case "ha":
        console.log("gt:Mùa Hạ");
        break;
    case "thu":
        console.log("Mùa Thu");
        break;
    case "dong":
        console.log("Mùa Đông");
        break;
    default:
        console.log("KHÔNG XÁC ĐỊNH");
        break;
}
var a = 3;
var b = 5;

function TinhTong(a, b) {
    var ketqua = a + b;
    return ketqua
}
var ketqua = TinhTong(a, b);
console.log(ketqua);

var diemtoan = 7;
var diemly = 8;
var diemhoa = 6;

function diemtb(diemtoan, diemly, diemhoa) {
    var tb = (diemtoan + diemly + diemhoa) / 3;
    return tb;
}
var tb = diemtb(diemtoan, diemly, diemhoa);
console.log(tb);

function xeploai(tb) {
    if (tb < 5)
        return "yeu";
    else if (tb >= 5 && tb < 6)
        return "tb";
    else if (tb >= 6 && tb < 8)
        return "kha";
    else if (tb >= 8 && tb < 9)
        return "goi";
    else
        return "xuat sac";
}

var xeploai = xeploai(tb);
console.log(xeploai);

//goi gia tri value va doi gia tri do
var inputname = document.getElementById("name");
console.log(inputname.value);
inputname.value=("Nhan");

//thay doi gia tri trong the div co id la cyber
var divcyber = document.getElementById("cyber");
console.log(divcyber);
console.log(divcyber.innerHTML);
divcyber.innerHTML="cyber q binh thanh";
//thay doi thuoc tinh css cua the div co id la color
var divcolor = document.getElementById("color");
divcolor.style.color = "red";

function thaydoinoidung(){
    var noidung = document.getElementById("noidung");
    noidung.innerHTML="da thay doi noi dung roi";
}

function moden(){
    var doimau = document.getElementById("doimau");
    doimau.src="./pic_bulbon.gif";
}

function tatden(){
    var doimau = document.getElementById("doimau");
    doimau.src="./pic_bulboff.gif";
}