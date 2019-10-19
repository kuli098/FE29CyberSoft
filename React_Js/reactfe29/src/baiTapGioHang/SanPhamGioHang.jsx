import React, { Component } from 'react'

export default class SanPhamGioHang extends Component {
    render() {
        let { sp, xemChiTiet,themGioHang } = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-lg-4 m-0">
                <div className="card text-left">
                    <img className="card-img-top" src={sp.hinhAnh} width={300} height={300} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sp.tenSP}</h4>
                        <p className="card-text">{sp.giaBan}</p>
                        <button className="btn btn-primary" onClick={()=>xemChiTiet(sp)}>Xem Chi Tiết</button>
                        <button className="btn btn-danger" onClick={()=>themGioHang(sp)}>Thêm Giỏ Hàng</button>
                    </div>
                </div>
            </div>

        )
    }
}
