import React, { Component } from 'react'

export default class ModalGioHang extends Component {
    renderGioHang = () => {
        let { sanPhamModal, xoaGioHang, tangGiamSL} = this.props;
        return sanPhamModal.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td><img src={sp.hinhAnh} alt="" width={60} height={60} /></td>
                    <td>{sp.tenSP}</td>
                    <td>
                        <button className="btn btn-success" onClick={() => tangGiamSL(sp.maSP,true)}>+</button>
                        {sp.soLuong}
                        <button className="btn btn-danger" onClick={() => tangGiamSL(sp.maSP,false)}>-</button>
                    </td>
                    <td>{sp.giaBan.toLocaleString()}</td>
                    <td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={() => xoaGioHang(sp)}>Xóa</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: "900px", width: "900px" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ Hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Mã SP</th>
                                            <th>Hình Ảnh</th>
                                            <th>Tên SP</th>
                                            <th>Số Lượng</th>
                                            <th>Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                            <th>Chức Năng</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderGioHang()}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan="5"></td>
                                            <td>Tổng Tiền</td>
                                            <td>
                                                {this.props.sanPhamModal.reduce((tongTien,sp,index)=>{
                                                    return tongTien += sp.soLuong * sp.giaBan
                                                },0).toLocaleString()}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
