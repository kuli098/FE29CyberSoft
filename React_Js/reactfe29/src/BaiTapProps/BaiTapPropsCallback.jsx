import React, { Component } from 'react';
import data from './Data_props/PhoneData.json'
import SanPhamCallback from './Data_props/SanPhamCallback.jsx';

export default class BaiTapPropsCallback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            spChiTiet: data[0],
        }
    }
    mangSanPham = data;
    renderSanPham = () => {
        return this.mangSanPham.map((sp, i) => {
            return (
                <SanPhamCallback key={i} sp={sp} xemChiTiet={this.xemChiTiet}/>
            )
        })
    }
    // hàm này viết ở nơi chứa nguồn dữ liệu thay đổi
    xemChiTiet = (spDuocChon) =>{
        this.setState({
            //khi click vao nut xem chi tiet thi lay thong so cua san pham dc click roi add vao state.spChiTiet => render lai noi dung chi tiet san pham
            spChiTiet:spDuocChon
        })
    }
    render() {
        let {maSP,tenSP, hinhAnh, manHinh, cameraTruoc, cameraSau,giaBan,heDieuHanh,ram,rom} =this.state.spChiTiet;
        return (
            <div className="container">
                <h3 className="text-success">Danh sach san pham</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} alt="" width="250px" height="200px"/>
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Man Hinh</th>
                                    <th>{manHinh}</th>
                                </tr>
                                <tr>
                                    <th>He dieu hanh</th>
                                    <th>{heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera truoc</th>
                                    <th>{cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera Sau</th>
                                    <th>{cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>ram</th>
                                    <th>{ram}</th>
                                </tr>
                                <tr>
                                    <th>rom</th>
                                    <th>{rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
