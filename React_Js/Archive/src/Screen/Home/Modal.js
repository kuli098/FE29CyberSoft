import React, { Component } from "react";
import {validateAddUser} from '../../utils/validate';

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user:{
        username: '',
        name: '',
        email: '',
        phone: '',
        type: '',
      },
      error:{
        username: '',
        name: '',
        email: '',
        phone: '',
        type: '',
      }
    };
  }

  render() {
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
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="phone"
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select type="text" className="form-control"
                  onChange={this.handleChange}
                  name="type">
                    <option>Choose One</option>
                    <option>Admin</option>
                    <option>User</option>
                  </select>
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
  handleChange = (event)=>{
    const errorMessage= validateAddUser(event.target.name, event.target.value);
    console.log(errorMessage);
    this.setState({
      user:{...this.state.user,[event.target.name]: event.target.value}
    })
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.state);
  }
}

export default Modal;
