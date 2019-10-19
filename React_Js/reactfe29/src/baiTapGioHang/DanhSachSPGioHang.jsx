import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang'

export default class DanhSachSPGioHang extends Component {
    constructor(props) {
        super(props);

    }
    renderSanPham = () => {
        let {mangSanPham,xemChiTiet,themGioHang} = this.props;
        return mangSanPham.map((sp, index) => {
            return <SanPhamGioHang key={index} sp={sp} xemChiTiet={xemChiTiet} themGioHang={themGioHang}/>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderSanPham()}
            </div>
        )
    }
}
