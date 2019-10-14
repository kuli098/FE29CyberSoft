import React, { Component } from 'react'
import data from './Data/data.json'

export default class BaiTapVongLap1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangPhim: data
        }
    }
    renderCard = () => {
        return this.state.mangPhim.map((phim, index) => {
            return <div className="col-md-4 pb-3">
                <div className="card" style={{ width: '18rem' }}>
                    <img className="card-img-top" style={{ height: '20rem' }} src={phim.hinhAnh} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{phim.tenPhim}</h5>
                        <p className="card-text" style={{ textOverflow:'ellipsis', overflow:'hidden',whiteSpace: 'nowrap',height:'100px'}}>{phim.moTa}</p>
                    </div>
                </div>
            </div>

        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderCard()}
                </div>
            </div>
        )
    }
}
