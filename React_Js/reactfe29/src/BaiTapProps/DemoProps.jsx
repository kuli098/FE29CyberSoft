import React, { Component } from 'react'

export default class DemoProps extends Component {
    constructor(props){
        super(props); // props la thuoc tinh co san cua component

    }
    render() {
        return (
            <div>
                Hello{" "+this.props.name}
            </div>
        )
    }
}
