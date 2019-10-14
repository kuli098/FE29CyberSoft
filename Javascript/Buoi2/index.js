document.getElementById('tinhtien').addEventListener('click', thuchientinhtien);
function thuchientinhtien() {
    console.log("click");
    var tongtien = document.getElementById("tongtien").value;
    var phantramtip = document.getElementById("phantramtip").value;
    var songuoi = document.getElementById("songuoi").value;
    console.log(tongtien);
    console.log(phantramtip);
    console.log(songuoi);

    var tientipmoinguoi = (tongtien * (phantramtip / 100)) / songuoi;
    console.log(tientipmoinguoi);

    document.getElementById('ketqua').style.display = "block";
    document.getElementById('sotienmoinguoi').innerHTML = tientipmoinguoi;
}
//mang ban dau
var mang = [1, 2, 5, 7, 10, 52, 6, 4]

//them vao cuoi
mang.push(22);
console.log(mang);

//them vao dau mang
mang.unshift(21);
console.log(mang);

//xoa phan tu cuoi
mang.pop();
console.log(mang);

//xoa phan tu dau
mang.shift();
console.log(mang);

//xoa 2 phan tu bat dau tu vi tri phan tu thu 2
mang.splice(2, 2);
console.log(mang);

for (var i=0; i<mang.length;i++){
    console.log('gia tri thu ' + i + ' la ' + mang[i]);
}
var count =2;
while(count < mang.length){
    console.log('gia tri thu ' + count + ' la ' + mang[count]);
    count++;
}

var mangSinhVien = [
    {
        maSo:1,
        name:"nhan",
    },
    {
        maSo:2,
        name:"vinh",
    }
]
