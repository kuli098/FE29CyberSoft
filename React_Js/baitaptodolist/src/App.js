import React, { Component } from 'react'
import './App.css'

//import components
import Modal from './Components/Modal';
import Controls from './Components/Controls';
import TaskItems from './Components/TaskItems';
import listOfTask from './Model/getData';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: []
    }
  }


  generateData = () => {
    localStorage.setItem('task', JSON.stringify(listOfTask.list))
  }

  componentWillMount=()=>{
    let taskJSON = JSON.parse(localStorage.getItem('task'));
    this.setState({
      task:taskJSON
    })
  }

  render() {
    let { task } = this.state;
    console.log(listOfTask.list);

    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls generateData={this.generateData} />
            {/* DISPLAY */}
            {/* <TaskItems task={listOfTask.list} /> */}
            <TaskItems task={task} />
          </div>
        </div>
        {/* The Modal */}
        <Modal />
      </div>
    )
  }
}
