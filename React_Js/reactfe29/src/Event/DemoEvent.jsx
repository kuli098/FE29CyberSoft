import React, { Component } from 'react'

export default class DemoEvent extends Component {
    handleOnClick = (message)=>{
        alert(message);
    }
    render() {
        return (
            <div>
                event component
                <button onClick={() =>{this.handleOnClick('hello nhan')}}>Onclick</button>
            </div>
        )
    }
}
