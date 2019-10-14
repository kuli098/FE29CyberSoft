function Menu() {
    this.mangDanhMuc = [];

    this.layDanhMucPhim = function (maDanhMuc) {
        var mangMenuPhim = [];
        for (var i = 0; i < this.mangDanhMuc.length; i++) {
            var danhMuc = this.mangDanhMuc[i];
            if (danhMuc.maDanhMucPhim === maDanhMuc) {
                mangMenuPhim = danhMuc.DanhMucPhim;
            }
        }
        return mangMenuPhim;
    }

    this.renderMenu = function () {
        var content = `<ul class="primary" id="nav">`;
        for (var index = 0; index < this.mangDanhMuc.length; index++) {
            var menuItem = this.mangDanhMuc[index];
            content += `
            <li>
              <a href="">${menuItem.tenDanhMucPhim}</a>
              ${this.renderMenuCon(menuItem.DanhMucPhim)}
            </li>
            `
        }
        content += '</ul>';
        return content;
    }


    this.renderMenuCon = function (dmPhim) {

        var content = ` <ul class="sub" id="navlist">`;
        for (var index = 0; index < dmPhim.length; index++) {
            var item = dmPhim[index];
            content += `
            <li><a href="">${item.ten}</a></li>
            `
        }

        content += '</ul>';
        return content;
    }

    this.renderTableCon = function (dmPhim,maDanhMucPhim) {
        // console.log(dmPhim)
        var content = ``;
        for (var index = 0; index < dmPhim.length; index++) {
            var item = dmPhim[index];
            content += `
            <tr>
                <td href="">${item.ma}</td>
                <td href="">${item.ten}</td>
                <td href="">
                    <button onclick="xoaMenuItem('${item.ma}','${maDanhMucPhim}')">Xóa</button>
                    <button onclick="suaMenuItem('${item.ma}', '${item.ten}','${maDanhMucPhim}')">Sửa</button>
                </td>
            </tr>
            `
        }

        return content;
    }

    this.renderTable = function () {
        var content = `<tbody id="tblDanhMucPhim">`;
        for (var i = 0; i < this.mangDanhMuc.length; i++) {
            var item = this.mangDanhMuc[i];
            content += `
            <tr>
            <td>${item.maDanhMucPhim}</td>
              <td>${item.tenDanhMucPhim}</td>
              <td>
                  <button class="btn btn-success" id="btnEdit" data-index="${i}" onclick="suaDM('${i}')">Sửa</button>
                  <button class="btn btn-danger" id="btnDel" data-index="${i}" onclick="xoaDM('${item.maDanhMucPhim}')">Xóa</button>
                  <button class="btn btn-danger" id="btnDel" data-index="${i}" onclick="xoaDMIndex('${i}')">Xóa</button>
                  <button class="btn btn-success" data-toggle="modal" data-target="#modelId" data-index="${i}" onclick="renderModalTablePhim('${item.maDanhMucPhim}')" id="menuItem">Menu Item</button>
            </td>
            <tr>
            `
        }
        content += '</tbody>';
        return content;
    }
    this.xoaDanhMuc = function (maDM) {
        for (var i = this.mangDanhMuc.length - 1; i >= 0; i--) {
            var danhMuc = this.mangDanhMuc[i];
            if (danhMuc.maDanhMucPhim === maDM) {
                this.mangDanhMuc.splice(i, 1);
            }
        }
    }
    this.xoaDanhMucIndex = function (i) {
        this.mangDanhMuc.splice(i, 1);
    }

    this.suaDanhMuc = function (i) {
        var danhMuc = this.mangDanhMuc[i];
        document.getElementById("MaDanhMuc").value = danhMuc.maDanhMucPhim;
        document.getElementById("TenDanhMuc").value = danhMuc.tenDanhMucPhim;
        document.getElementById("MaDanhMuc").setAttribute("disabled", "disabled");
    }

    this.capNhatDanhMuc = function () {
        var ma = document.getElementById("MaDanhMuc").value;
        var ten = document.getElementById("TenDanhMuc").value;

        for (var i = 0; i < this.mangDanhMuc.length; i++) {
            var dm = this.mangDanhMuc[i];
            if (ma === dm.maDanhMucPhim) {
                dm.tenDanhMucPhim = ten;
            }
        }
    }

    this.layDanhMucCon = function (maDM) {
        var content = `<div class="modal-header">`;
        for (var index = 0; index < this.mangDanhMuc.length; index++) {
            var dm = this.mangDanhMuc[index];
            if (dm.maDanhMucPhim === maDM) {
                content += `
                <h5 class="modal-title">Danh mục ${dm.tenDanhMucPhim}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                `
            }
        }
        content += `</div>`;
        return content;
    }

    // this.renderTableCon = function (maDM) {
    //     var content = "";
    //     var danhMucCon = [];
    //     for(var i = 0; i < this.mangDanhMuc.length; i++){
    //         var danhMuc = this.mangDanhMuc[i];
    //         danhMucCon.push(danhMuc.DanhMucPhim);
    //         if(danhMuc.maDanhMucPhim === maDM){
    //             for(var j = 0; j < danhMucCon.length; j++){
    //                 var dmc = danhMucCon[j];
    //                 content += `
    //                 <tr>
    //                 <td>${dmc.ma}</td>
    //                 <td>${dmc.ten}</td>                    <td>
    //                   <button>Sửa</button>
    //                   <button>Xóa</button>
    //                 </td>

    //                 `
    //             }
    //         }
    //     }
    //     content += `</tr>`;
    //     return content;
    // }

    this.themMenuCon = function (maDanhMucPhim, ma, ten) {
        var dmPhimItem = { ma: ma, ten: ten }; //tạo object nhanh không thông qua prototype

        //Duyệt mảng phim tìm ra maDanhMucPhim cần thêm
        for (var index = 0; index < this.mangDanhMuc.length; index++) {
            var danhMuc = this.mangDanhMuc[index];
            if (danhMuc.maDanhMucPhim === maDanhMucPhim) {
                danhMuc.DanhMucPhim.push(dmPhimItem);
            }
        }


    }


    this.xoaMenuCon = function (ma) {
        for (var index = 0; index < this.mangDanhMuc.length; index++) {
            var danhMuc = this.mangDanhMuc[index];
            for (var i = 0; i < danhMuc.DanhMucPhim.length; i++) {
                var menuItem = danhMuc.DanhMucPhim[i];
                if(menuItem.ma === ma){
                    danhMuc.DanhMucPhim.splice(i,1);
                }
            }


        }
    }

   
    this.capNhatMenuCon = function (ma,ten) {
        for (var index = 0; index < this.mangDanhMuc.length; index++) {
            var danhMuc = this.mangDanhMuc[index];
            for (var i = 0; i < danhMuc.DanhMucPhim.length; i++) {
               
                if(danhMuc.DanhMucPhim[index].ma === ma){
                    danhMuc.DanhMucPhim[index].ten = ten;
                }
            }


        }
    }
    
}
