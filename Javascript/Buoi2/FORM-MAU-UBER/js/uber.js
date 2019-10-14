//Constants uber X
const UBERX_KM1 = 16000;
const UBERX_KM20 = 14000;
const UBERX_KmTREN20 = 12000;
const UBERX_TIEN_CHO = 2000;
//Constants uber SUV
const UBERSUV_KM1 = 18000;
const UBERSUV_KM20 = 15000;
const UBERSUV_KmTREN20 = 13000;
const UBERSUV_TIEN_CHO = 3000;
//Constants uber BLACK
const UBERBLACK_KM1 = 20000;
const UBERBLACK_KM20 = 18000;
const UBERBLACK_KMTREN20 = 15000;
const UBERBLACK_TIEN_CHO = 5000;


document.getElementById('tinhTien').addEventListener('click', tinhTien);

function kiemTraLoaiXe() {
    var uberX = document.getElementById("uberX").checked;
    var uberSUV = document.getElementById("uberSUV").checked;
    var uberBlack = document.getElementById("uberBlack").checked;
    console.log(uberX);
    console.log(uberSUV);
    console.log(uberBlack);
    if (uberX) {
        return "uberX";
    }
    if (uberSUV) {
        return "uberSUV";
    }
    if (uberBlack) {
        return "uberBlack";
    }
    alert("ban chua chon xe");
    return "error";
}

function tinhTienLoaiXe(soKM, thoiGianCho, km1, km20, kmTren20, tienThoiGian) {
    if (soKM <= 1) {
        return km1 + thoiGianCho * tienThoiGian;
    }
    if (soKM <= 20) {
        return km1 + (soKM - 1) * km20 + thoiGianCho * tienThoiGian;
    }
    return km1 + 19 * km20 + (soKM - 20) * kmTren20 + thoiGianCho * tienThoiGian;
}
function tinhTien() {
    var soKM = document.getElementById("soKM").value;
    var thoiGianCho = document.getElementById("thoiGianCho").value;
    var loaixe = kiemTraLoaiXe();
    var tongTien = 0;

    switch (loaixe) {
        case "uberX":
            tongTien = tinhTienLoaiXe(soKM, thoiGianCho, UBERX_KM1, UBERX_KM20, UBERX_KmTREN20, UBERX_TIEN_CHO);
            break;
        case "uberSUV":
            tongTien = tinhTienLoaiXe(soKM, thoiGianCho, UBERSUV_KM1, UBERSUV_KM20, UBERSUV_KmTREN20, UBERSUV_TIEN_CHO);
            break;
        case "uberBlack":
            tongTien = tinhTienLoaiXe(soKM, thoiGianCho, UBERBLACK_KM1, UBERBLACK_KM20, UBERBLACK_KMTREN20, UBERBLACK_TIEN_CHO);
            break;
        default:
            break;
    }
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTien;
    console.log(tongTien);
}