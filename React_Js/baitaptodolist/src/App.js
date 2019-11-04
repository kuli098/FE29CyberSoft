import React, { Component } from 'react'
import './App.css'

//import components
import Modal from './Components/Modal';
import Controls from './Components/Controls';
import TaskItems from './Components/TaskItems';
import listOfTask from './Model/getData';
import randomid from 'randomid';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      task: [],
      taskEditing: null,
      isAddNewTask: true,
      //Filter
      filterType: '',
      filterProgress: -1,
      filterSearch: '',
      //Sort
      sortType: '',

    }
  }
  generateData = () => {
    localStorage.setItem('task', JSON.stringify(listOfTask.list))
  }
  componentWillMount = () => {
    let taskJSON = JSON.parse(localStorage.getItem('task'));
    this.setState({
      task: taskJSON
    })
  }
  addNewTask = (data) => {
    // console.log(data);
    if (this.state.isAddNewTask) {
      data.id = randomid(5);
      let taskJSON = JSON.parse(localStorage.getItem('task'));
      taskJSON = [...taskJSON, data];
      this.setState({
        task: taskJSON
      });
      localStorage.setItem('task', JSON.stringify(taskJSON))
    }
  }
  clearBeforeAddNewTask = () => {
    this.setState({
      isAddNewTask: true
    })
  }
  editTask = (data) => {
    // console.log(data);
    this.setState({
      isAddNewTask: false,
      taskEditing: data
    })
  }
  changeProgress = (id, progress) => {
    console.log(id, "_", progress);
    let taskJSON = JSON.parse(localStorage.getItem('task'));
    for (let index in taskJSON) {
      if (taskJSON[index].id === id) {
        taskJSON[index].status = progress
      }
    }
    this.setState({
      task: taskJSON
    })
    localStorage.setItem('task', JSON.stringify(taskJSON));
  }
  onEditTask = (data) => {
    if (!this.state.isAddNewTask) {
      let taskJSON = JSON.parse(localStorage.getItem('task'));
      // find task
      for (let i in taskJSON) {
        if (taskJSON[i].id === data.id) {
          taskJSON[i].name = data.name
          taskJSON[i].priority = data.priority
          taskJSON[i].labelArr = data.labelArr
          taskJSON[i].memberIdArr = data.memberIdArr
          taskJSON[i].status = data.state
          taskJSON[i].description = data.description
        }
      }
      this.setState({
        task: taskJSON
      });
      localStorage.setItem('task', JSON.stringify(taskJSON))
    }
  }
  changeFilterProgress = (filterProgress) => {
    this.setState({
      filterType: 'filterProgress',
      filterProgress: filterProgress
    })
  }
  changeFilterSearch = (filterSearch)=>{
    this.setState({
      filterType: 'filterSearch',
      filterSearch: filterSearch
    })
  }
  changeSortType = (sortType)=>{
    this.setState({
      filterType:'sort',
      sortType:sortType
    })
  }

  render() {
    let { task, isAddNewTask, taskEditing, filterType, filterProgress, filterSearch, sortType} = this.state;
    return (
      <div>
        <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
        <div className="container-fluid">
          <div className="row">
            {/* PANEL */}
            <Controls
            generateData={this.generateData}
            clearBeforeAddNewTask={this.clearBeforeAddNewTask}
            changeFilterProgress={this.changeFilterProgress}
            changeSortType={this.changeSortType}
            />

            {/* DISPLAY */}
            {/* <TaskItems task={listOfTask.list} /> */}
            <TaskItems
             task={task}
             editTask={this.editTask}
             changeProgress={this.changeProgress}
             filterType={filterType}
             filterProgress={filterProgress}
             changeFilterSearch={this.changeFilterSearch}
             filterSearch={filterSearch}
             sortType={sortType}
             />
          </div>
        </div>
        {/* The Modal */}
        <Modal addNewTask={this.addNewTask} isAddNewTask={isAddNewTask} taskEditing={taskEditing} onEditTask={this.onEditTask} />
      </div>
    )
  }
}
