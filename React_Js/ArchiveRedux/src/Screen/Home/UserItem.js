import React, { Component } from "react";
import { connect } from "react-redux";


class User extends Component {
  render() {
    const {user} = this.props;
    return (
      <tr>
        <td></td>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.type}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.xoaUser(user.username)}>Delete</button>
        </td>
        <td>
          <button className="btn btn-info" data-target="#modelId" data-toggle="modal" onClick ={() =>this.themUser()}>Update</button>
        </td>
      </tr>
    );
  }
  xoaUser = (username) =>{
    const action ={
      type: 'xoa_user',
      payload: username,
    };
    this.props.dispatch(action);
  };
  themUser = () =>{
    // let {user} =this.props;
    const action ={
      type: 'sua_user',
      payload: this.props.user,
    };
    this.props.dispatch(action);
  }
}

export default connect()(User);
