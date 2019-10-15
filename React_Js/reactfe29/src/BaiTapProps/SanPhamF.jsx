import React from 'react'

export default function SanPhamF(props) {
    return (
        <div className="card text-left col-md-4" >
            {/* <img className="card-img-top" src="holder.js/100px180/" alt /> */}
            <div className="card-body">
                <h4 className="card-title">{props.sanPham.tenSP}</h4>
                <p className="card-text">{props.sanPham.gia}</p>
            </div>
        </div>
    )
}
