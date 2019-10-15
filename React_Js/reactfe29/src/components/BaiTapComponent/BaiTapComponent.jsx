import React, { Component } from 'react'
import Header from './Header';
import Slider from './Slider';
import ProductList from './ProductList';
import Footer from './Footer';

export default class BaiTapComponent extends Component {
    mangSanPham= [
        {maSP: 1, tenSP:'Black berry',hinhAnh:'./img/sp_blackberry.png',gia: 1000},
        {maSP: 2, tenSP:'Iphone X',hinhAnh:'./img/sp_iphoneX.png',gia: 2000},
        {maSP: 3, tenSP:'Note 7',hinhAnh:'./img/sp_note7.png',gia: 3000},
        {maSP: 4, tenSP:'Vivo',hinhAnh:'./img/sp_vivo850.png',gia: 4000},
    ]

    render() {
        return (
            <div>
                <Header />
                <Slider />
                <h3 className="text-center">BEST SMART PHONE</h3>
                <ProductList mangSanPham ={this.mangSanPham}/>
                <Footer />
            </div>
        )
    }
}
