import React, { Component } from 'react'

export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colorCar: './img/imgBlackCar.jpg' // thuoc tinh nao thay doi lam giao dien render lai thi dat trong state
        }
    }
    // changeSilver = () => {
    //     this.setState({
    //         colorCar: './img/imgSilverCar.jpg'
    //     })
    // }
    // changeRed = () => {
    //     this.setState({
    //         colorCar: './img/imgRedCar.jpg'
    //     })
    // }
    // changeBlack = () => {
    //     this.setState({
    //         colorCar: './img/imgBlackCar.jpg'
    //     })
    // }
    changColor = (imgSrc)=>{
        this.setState({
            colorCar: imgSrc
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h3>Change Color</h3>
                        <img src={this.state.colorCar} alt className="w-75" />
                    </div>
                    <div classname="col-6">
                        <button onClick={()=>{this.changColor('./img/imgRedCar.jpg')}} type="button" className="btn btn-danger">Red</button>
                        <button onClick={()=>{this.changColor('./img/imgSilverCar.jpg')}}type="button" className="btn btn-secondary">Silver</button>
                        <button onClick={()=>{this.changColor('./img/imgblackCar.jpg')}}type="button" className="btn btn-dark">Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
