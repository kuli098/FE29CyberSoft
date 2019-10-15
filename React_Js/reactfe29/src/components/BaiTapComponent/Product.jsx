import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3 m-0">
                <div className="card bg-light" style={{ width: 260 }}>
                    <img className="card-img-top" src={this.props.sp.hinhAnh} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                    <div className="card-body text-center">
                        <h4 className="card-title text-center">{this.props.sp.tenSP}</h4>
                        <p className="card-text">{this.props.sp.gia}</p>
                        <a href="#" className="btn btn-primary">Detail</a>
                        <a href="#" className="btn btn-danger">Cart</a>
                    </div>
                </div>
            </div>
        )
    }
}
