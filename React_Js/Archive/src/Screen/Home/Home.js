import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
class Home extends Component {
  constructor (props){
    super(props);
    this.state={
      userList:[{username:"Nhan",name:"nhan nguyen",email:"nhan120298@gmail.com", phone:"0924444740", type:"admin"},
                {username:"Vinh",name:"Huu Vinh",email:"vinhdepzai@gmail.com", phone:"0123456789", type:"user"}]
    };
  }
  render() {
    return (
      <div>
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button className="btn btn-success" data-toggle="modal" data-target="#modelId">
            Add User
          </button>
        </div>
        <Users userList={this.state.userList} xoaUser={this.xoaUser}/>
        <Modal />
      </div>
    );
  }
  xoaUser=(username)=>{
    let mangUserCapNhat =[...this.state.userList];
    let index = mangUserCapNhat.findIndex((user => user.username === username));
    index !== 1 && this.setState(prevState => prevState.userList.splice(index,1))
    // if(index !== 1){
    //   mangUserCapNhat.splice(index,1)
    // }
    // this.setState({
    //   userList:mangUserCapNhat
    // })
  }
}

export default Home;
