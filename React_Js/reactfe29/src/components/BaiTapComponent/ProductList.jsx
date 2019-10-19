import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    renderProduct = () => {
        let {mangSanPham,xemChiTiet} = this.props;
        return mangSanPham.map((sp, index) => {
            return <Product key={index} sp={sp} xemChiTiet={xemChiTiet}/>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
