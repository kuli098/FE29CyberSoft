import React, { Component } from "react";
import { connect } from "react-redux";


class User extends Component {
  render() {
    let {user} = this.props;
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
      </tr>
    );
  }
  xoaUser = username =>{
    const action ={
      type: 'xoa_user',
      payload: username,
    };
    this.props.dispatch(action);
  };
}

export default connect()(User);
