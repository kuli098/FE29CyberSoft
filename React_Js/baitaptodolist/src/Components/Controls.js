import React, { Component } from 'react'
import AddNewTask from './Controls/AddNewTask'
import InitializeTask from './Controls/InitializeTask'
import FilterProgress from './Controls/FilterProgress'
import FilterLable from './Controls/FilterLable'
import FilterPriority from './Controls/FilterPriority'
import Sort from './Controls/Sort'

export default class Controls extends Component {
    render() {
        return (
            <div className="col-md-3 text-center px-0">
                <div className="header header--left d-flex align-items-center">
                    <img src="./img/user_1.jpg" className="ml-2 user" alt="" />
                    <h3 className="text-white d-inline font-weight-light ml-2">Lê Quang Song</h3>
                </div>
                {/* Initialize Task */}
                <InitializeTask generateData={this.props.generateData}/>

                {/* Add New Task */}
                <AddNewTask clearBeforeAddNewTask={this.props.clearBeforeAddNewTask} />

                {/* Filter */}
                <div className="px-3">
                    {/* Filter Progress */}
                    <FilterProgress changeFilterProgress={this.props.changeFilterProgress} />

                    {/* Filter label */}
                    <FilterLable/>

                    {/* Filter Priority */}
                    <FilterPriority/>

                    {/* Sort */}
                    <Sort changeSortType={this.props.changeSortType} />
                </div>
            </div>
        )
    }
}
