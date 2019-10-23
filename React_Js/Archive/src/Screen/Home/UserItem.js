import React, { Component } from "react";

class User extends Component {
  render() {
    let {user,xoaUser} = this.props;
    return (
      <tr>
        <td></td>
        <td>{user.username}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.type}</td>
        <td>
          <button className="btn btn-danger" onClick={xoaUser}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default User;
