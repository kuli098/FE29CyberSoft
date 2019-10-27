import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class Users extends Component {
  renderUser = () => {
    return this.props.userList.map((user, index) => {
      return <UserItem user={user} key={index} />;
    });
  };
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th />
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

const mapStateToProps = state => {
  return {
    userList: state.userList
  };
};

export default connect(mapStateToProps)(Users);
