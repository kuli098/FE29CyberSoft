import React, { Component } from 'react';
// import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import CheckboxGroup from 'react-checkbox-group';


export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            description: '',
            priority: '',
            memberIdArr: [],
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefalt()
    }
    memberChanged = (newmember) => {
        this.setState({
            memberIdArr: newmember
        });
    }

    render() {
        return (
            <div className="modal fade" id="modalTask">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Thêm công việc</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <form onSubmit={this.onSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="taskName">Tên công việc:</label>
                                    <input type="text" className="form-control" name="name" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Mô tả:</label>
                                    <textarea className="form-control" rows={2} id="description" name="description" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="priority">Độ ưu tiên:</label>
                                    <select className="form-control" id="priority" name="priority" onChange={this.onChange}>
                                        <option value={-1}>Chọn độ ưu tiên</option>
                                        <option value={3}>Thấp</option>
                                        <option value={2}>Trung bình</option>
                                        <option value={1}>Cao</option>
                                    </select>
                                </div>
                                <CheckboxGroup
                                    checkboxDepth={2}
                                    name="memberIdArr" value={this.state.memberIdArr} onChange={this.memberChanged}>
                                    {
                                        (Checkbox) => (
                                            <>
                                            Người Thực Hiện:
                                            <br/>
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

                                <br /><br />
                                <label>Nhãn:</label>
                                <br />
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />Frontend
                                </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />Backend
                                </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />API
                                </label>
                                </div>
                                <div className="form-check-inline">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" defaultValue />Issue
                                </label>
                                </div>
                            </div>
                        </form>
                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success" data-dismiss="modal">Thêm Task</button>
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
