import React, { Component } from 'react'

export default class SanPham extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card text-left col-md-4" >
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.gia}</p>
                </div>
            </div>
        )
    }
}
