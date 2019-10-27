import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderUser = () => {
    let { xoaUser } = this.props;
    return this.props.userList.map((user, index) => {
      return <UserItem user={user} key={index} xoaUser={xoaUser} />;
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>{this.renderUser()}</tbody>
        </table>
      </div>
    );
  }
}

export default Users;
