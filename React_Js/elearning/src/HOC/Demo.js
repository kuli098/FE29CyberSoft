import React, { Component } from "react";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.children}</h1>
        {this.props.render}
      </div>
    );
  }
}

export default Demo;
