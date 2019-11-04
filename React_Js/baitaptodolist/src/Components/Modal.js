import React, { Component } from 'react';
// import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import CheckboxGroup from 'react-checkbox-group';
// import randomid from 'randomid';


export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            priority: '',
            memberIdArr: [],
            labelArr: [],
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    onSubmit = (event) => {
        event.preventDefalt();
        // this.props.addNewTask(this.state);
    }
    memberChanged = (newmember) => {
        this.setState({
            memberIdArr: newmember
        });
    }
    labelChanged = (newlabel) => {
        this.setState({
            labelArr: newlabel
        });
    }
    componentWillReceiveProps = (nextProps) => {
        // console.log(nextProps);
        if(nextProps && nextProps.isAddNewTask){
            this.clearForm();
        }
        if (nextProps && nextProps.taskEditing && !nextProps.isAddNewTask) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                description: nextProps.taskEditing.description,
                priority: nextProps.taskEditing.priority,
                memberIdArr: nextProps.taskEditing.memberIdArr,
                labelArr: nextProps.taskEditing.labelArr,
            })
        }
    }
    clearForm = () => {
        this.setState({
            id: '',
            name: '',
            description: '',
            priority: '',
            memberIdArr: [],
            labelArr: [],
        })
    }

    render() {
        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">{this.props.isAddNewTask ? "Thêm Công Việc" : "Sửa Công Việc"}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="taskName">Tên công việc:</label>
                                    <input type="text" className="form-control" name="name" onChange={this.onChange} value={this.state.name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Mô tả:</label>
                                    <textarea className="form-control" rows={2} id="description" name="description" onChange={this.onChange} value={this.state.description}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Độ ưu tiên:</label>
                                    <select className="form-control" id="priority" name="priority" onChange={this.onChange} value={this.state.priority} >
                                        <option value={-1}>Chọn độ ưu tiên</option>
                                        <option value={3}>Thấp</option>
                                        <option value={2}>Trung bình</option>
                                        <option value={1}>Cao</option>
                                    </select>
                                </div>
                                {/* Người Thực Hiện */}
                                <CheckboxGroup
                                    name="memberIdArr" value={this.state.memberIdArr} onChange={this.memberChanged}>
                                    {(Checkbox) => (
                                        <>
                                            Người Thực Hiện:
                                            <br />
                                            <label>
                                                <Checkbox value="user_2" /> Phó Nghĩa Văn
                                            </label>
                                            <label>
                                                <Checkbox value="user_3" /> Nguyễn Tiến Minh Tuấn
                                            </label>
                                            <label>
                                                <Checkbox value="user_4" /> Đặng Trung Hiếu
                                            </label>
                                            <label>
                                                <Checkbox value="user_5" /> Trương Tấn Khải
                                            </label>
                                        </>
                                    )
                                    }
                                </CheckboxGroup>
                                <br />
                                {/* Nhãn */}
                                <CheckboxGroup
                                    name="labelArr" value={this.state.labelArr} onChange={this.labelChanged}>
                                    {(Checkbox) => (
                                        <>
                                            Nhãn:
                                            <br />
                                            <label>
                                                <Checkbox value="Frontend" /> Frontend
                                            </label>
                                            <label>
                                                <Checkbox value="Backend" /> Backend
                                            </label>
                                            <label>
                                                <Checkbox value="API" /> API
                                            </label>
                                            <label>
                                                <Checkbox value="Issue" /> Issue
                                            </label>
                                        </>
                                    )
                                    }
                                </CheckboxGroup>
                            </div>
                        </form>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" onClick={() => { this.props.addNewTask(this.state) }}> Thêm Công Việc </button>
                            {/* <button type="submit" className="btn btn-success">Thêm</button> */}
                            <button type="button" className="btn btn-success" onClick={() => { this.props.onEditTask(this.state) }}> Sửa </button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
