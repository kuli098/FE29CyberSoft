import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        let { sanPhamModal, xemChiTiet } = this.props;
        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{sanPhamModal.tenSP}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="row">
                            <div className="modal-body col-5">
                                <img src={sanPhamModal.hinhAnh} alt="" width={220} height={220} />
                            </div>
                            <div className="modal-body col-6">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Tên Sản Phẩm</th>
                                            <th>{sanPhamModal.tenSP}</th>
                                        </tr>
                                        <tr>
                                            <th>Giá Bán</th>
                                            <th>{sanPhamModal.gia}</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
