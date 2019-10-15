import React, { Component } from 'react'

export default class SanPhamCallback extends Component {
    render() {
        let {sp,xemChiTiet} = this.props;
        return (
            <div className="card text-left col-md-4" >
                <img className="card-img-top" height="350px" src={sp.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{sp.tenSP}</h4>
                    <p className="card-text">{sp.giaBan}</p>
                    <button type="button" class="btn btn-primary" onClick={() =>xemChiTiet(sp)}>Xem Chi Tiet</button>
                </div>
            </div>
        )
    }
}
