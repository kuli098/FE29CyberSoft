import React, { Component } from 'react'
import Header from './Header';
import Slider from './Slider';
import ProductList from './ProductList';
import Footer from './Footer';

export default class BaiTapComponent extends Component {

    render() {
        return (
            <div>
                <Header />
                <Slider />
                <h3 className="text-center">BEST SMART PHONE</h3>
                <ProductList />
                <Footer />
            
            </div>
        )
    }
}
