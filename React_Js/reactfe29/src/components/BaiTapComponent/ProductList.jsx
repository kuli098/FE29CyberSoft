import React, { Component } from 'react'
import Product from './Product'
import SanPham from '../../BaiTapProps/SanPham';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    renderProduct = () => {
        return this.props.mangSanPham.map((sp, index) => {
            return <Product key={index} sp={sp} />
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
