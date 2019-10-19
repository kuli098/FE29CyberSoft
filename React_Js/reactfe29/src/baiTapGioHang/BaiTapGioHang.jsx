import React, { Component } from 'react'
import DanhSachSPGioHang from './DanhSachSPGioHang'
import data from '../BaiTapProps/Data_props/PhoneData.json'
import ModalGioHang from './ModalGioHang';

export default class BaiTapGioHang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanPham: data[1],
            sanPhamModal: []
        }
    }
    mangSanPham = data;
    render() {
        let { sanPham, sanPhamModal } = this.state;
        let tongSoLuong = sanPhamModal.reduce((tsl, spModal, index) => {
            return tsl += spModal.soLuong
        }, 0)
        return (
            <div className="container">
                <h3 className="text-success text-center">Danh sach san pham</h3>
                <div className="text-right">
                    <span className="text-danger" style={{ cursor: 'pointer', fontSize: '17px', fontWeight: 'bold' }} data-toggle="modal" data-target="#modelId">Giỏ Hàng ({tongSoLuong})</span>
                </div>
                <DanhSachSPGioHang mangSanPham={this.mangSanPham} xemChiTiet={this.xemChiTiet} themGioHang={this.themGioHang} />
                <div className="row">
                    <div className="col-4">
                        <h3>{sanPham.tenSP}</h3>
                        <img src={sanPham.hinhAnh} alt="" width={200} height={200} />
                    </div>
                    <div className="col-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Màn Hình</th>
                                    <th>{sanPham.manHinh}</th>
                                </tr>
                                <tr>
                                    <th>He dieu hanh</th>
                                    <th>{sanPham.heDieuHanh}</th>
                                </tr>
                                <tr>
                                    <th>Camera truoc</th>
                                    <th>{sanPham.cameraTruoc}</th>
                                </tr>
                                <tr>
                                    <th>Camera Sau</th>
                                    <th>{sanPham.cameraSau}</th>
                                </tr>
                                <tr>
                                    <th>ram</th>
                                    <th>{sanPham.ram}</th>
                                </tr>
                                <tr>
                                    <th>rom</th>
                                    <th>{sanPham.rom}</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <ModalGioHang sanPhamModal={sanPhamModal} xoaGioHang={this.xoaGioHang} tangGiamSL={this.tangGiamSL} />
            </div>
        )
    }
    //xem chi tiết
    xemChiTiet = (spDuocChon) => {
        this.setState({
            sanPham: spDuocChon
        })
    }
    // thêm giỏ hàng
    themGioHang = (spDuocChon) => {
        let sanPhamGioHang = {
            maSP: spDuocChon.maSP,
            tenSP: spDuocChon.tenSP,
            giaBan: spDuocChon.giaBan,
            hinhAnh: spDuocChon.hinhAnh,
            soLuong: 1
        };
        let gioHangCapNhat = [...this.state.sanPhamModal];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === sanPhamGioHang.maSP);
        if (index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        }
        else {
            gioHangCapNhat.push(sanPhamGioHang)
        }
        this.setState({
            sanPhamModal: gioHangCapNhat
        })
    }
    //Xóa giỏ hàng
    xoaGioHang = (maSP) => {
        // cách 1 sử dụng hàm findIndex
        let gioHangCapNhat = [...this.state.sanPhamModal];
        let index = gioHangCapNhat.findIndex((sp => sp.maSP === maSP));
        if (index !== 1) {
            gioHangCapNhat.splice(index, 1)
        }
        // cách 2 sử dụng hàm filter
        // let gioHangCapNhat = this.state.sanPhamModal.filter(sp => sp.maSP !== maSP);
        this.setState({
            sanPhamModal: gioHangCapNhat
        })
    }
    //tăng giảm số lượng giỏ hàng
    tangGiamSL = (maSP, tangGiam) => {
        let gioHangCapNhat = [...this.state.sanPhamModal];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else if (gioHangCapNhat[index].soLuong > 1)
            {
                gioHangCapNhat[index].soLuong -= 1;
            }

        this.setState({
            sanPhamModal: gioHangCapNhat
        })
    }
}
