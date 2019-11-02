import React, { Component } from 'react'

export default class InitializeTask extends Component {
    InitializeTask = ()=>{
        this.props.generateData();
    }
    render() {
        return (
            <button type="button" className="btn my-3 btn--initializeTask" onClick={this.InitializeTask}>
                <i className="fa fa-pencil-square-o" />
                Lấy dữ liệu từ LocalStorage
              </button>
        )
    }
}
