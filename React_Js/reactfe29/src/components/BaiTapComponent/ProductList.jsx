import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        )
    }
}
