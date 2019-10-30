import React, { Component } from "react";
import { validateAddUser } from "../../utils/validate";
import { connect } from "react-redux";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        name: "",
        email: "",
        phone: "",
        type: ""
      },
      error: {
        username: "",
        name: "",
        email: "",
        phone: "",
        type: ""
      }
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps);
    if (nextProps.userUpdate.username !== prevState.user.username) {
      return { ...prevState, user: nextProps.userUpdate };
    }
    return prevState;
  }

  render() {
    // const {username,name,email,phone,type} = this.props.userUpdate;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="username"
                    value={this.state.user.username}
                  />
                  {this.state.error.username && (
                    <p className="alert alert-danger">
                      {this.state.error.username}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="name"
                    value={this.state.user.name}
                  />
                  {this.state.error.name && (
                    <p className="alert alert-danger">
                      {this.state.error.name}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="email"
                    value={this.state.user.email}
                  />
                  {this.state.error.email && (
                    <p className="alert alert-danger">
                      {this.state.error.email}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="phone"
                    value={this.state.user.phone}
                  />
                  {this.state.error.phone && (
                    <p className="alert alert-danger">
                      {this.state.error.phone}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="type"
                    value={this.state.user.type}
                  >
                    <option>Choose One</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                  </select>
                  {this.state.error.type && (
                    <p className="alert alert-danger">
                      {this.state.error.type}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleChange = event => {
    const errorMessage = validateAddUser(event.target.name, event.target.value);
    this.setState({
      user: { ...this.state.user, [event.target.name]: event.target.value },
      error: {
        ...this.state.error,
        [event.target.name]: errorMessage
      }
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.validateAll()) {
      // 1: connect component with store
      // 2: dispatch action
      // 3: len userReducer xu ly
      const action = {
        type: "them_user",
        payload: this.state.user
      };
      this.props.dispatch(action);
      // 4: add user, neu email va username da ton tai thi kh cho tao
    }
  };
  validateAll = () => {
    //duyệt this.state.error (for in), neu 1 thuoc tinh length >0 thi return false || true
    for (var index in this.state.error) {
      if (this.state.user[index] === 0 || this.state.error[index].length > 0)
        return false;
      //this.state.error[index] === this.state.error.username
    }
    return true;
  };
}

const mapStateToProps = state => {
  return {
    userUpdate: state.userUpdate || {}
  };
};

export default connect(mapStateToProps)(Modal);
