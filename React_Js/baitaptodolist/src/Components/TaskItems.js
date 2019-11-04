import React, { Component } from 'react'
import THead from './TaskItems/THead'
import Item from './TaskItems/Item'
import Search from './TaskItems/Search';

export default class TaskItems extends Component {
    render() {
        let { task, filterType, filterProgress, changeFilterSearch, sortType } = this.props;
        let filterTask = [];
        switch (filterType) {
            case "filterProgress":
                if (filterProgress === -1) {
                    filterTask = task;
                }
                else {
                    for (let ts of task) {
                        if (parseInt(ts.status, 10) === filterProgress) {
                            filterTask = [...filterTask, ts]
                        }
                    }
                }
                break;
            case "filterSearch":
                filterTask = task.filter((ts) => {
                    return ts.name.toLowerCase().indexOf(this.props.filterSearch.toLowerCase()) !== -1;
                })

                break;
            case "sort":
                filterTask = task;
                if (sortType === "asc") {
                    filterTask.sort((a, b) => {
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x < y) { return -1 }
                        if (x > y) {return 1}
                        return 0
                    })
                }
                if (sortType === "desc") {
                    filterTask.sort((a, b) => {
                        let x = a.name.toLowerCase();
                        let y = b.name.toLowerCase();
                        if (x > y) { return -1 }
                        if (x < y) {return 1}
                        return 0
                    })
                }
                break;

            default:
                filterTask = task;
                break;
        }

        let elmItem = filterTask.map((item, index) => {
            return <Item
                key={index}
                item={item}
                index={index}
                editTask={this.props.editTask}
                changeProgress={this.props.changeProgress}
            />
        })
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Search changeFilterSearch={changeFilterSearch} />
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        {/* THead */}
                        <THead />
                        <tbody>
                            {elmItem}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
