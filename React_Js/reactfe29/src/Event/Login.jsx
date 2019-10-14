import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props){
        super(props); // props la thuoc tinh co san cua component

        this.state={ //state: la thuoc tinh co san cua component quan ly bien co gia tri thay doi
            isLogin:false
        }
    }
    // thuoc tinh cua component
    //true la da dang nhanp, false la chua dang nhap
    userName = 'nhan';
    renderContent = ()=>{
        if(this.state.isLogin){
            return <p>Hello {this.userName}</p>
        }
        else{
            return <button onClick={this.login}>Login Now</button>
        }
    }
    login = ()=>{
        // this.state.isLogin = true; // khong gan truc tiep
        this.setState({
            isLogin : true
        }, ()=>{
            console.log(this.state.isLogin);
        })
    }
    //phuong thuc render cua component login
    render() {
        return (
            <div>
                {this.renderContent()}
                {/* {this.isLogin ? <p>hello {this.userName}</p> : <button>Login Now</button>} toan tu 3 ngoi */}
                {/* {this.login()} */}
            </div>
        )
    }
}
