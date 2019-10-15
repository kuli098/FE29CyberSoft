import React, { Component } from 'react'

export default class SanPham extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="card text-left col-md-4" >
                {/* <img className="card-img-top" src="holder.js/100px180/" alt /> */}
                <div className="card-body">
                    <h4 className="card-title">{this.props.sanPham.tenSP}</h4>
                    <p className="card-text">{this.props.sanPham.gia}</p>
                </div>
            </div>
        )
    }
}
