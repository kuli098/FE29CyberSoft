import React, { Component } from 'react'

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedProgress: ''
        }
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => {
            this.props.changeProgress(this.props.item.id, this.state.selectedProgress);
        });
    }
    getLabelColor = (label) => {
        let labelColor;
        switch (label) {
            case "Frontend":
                return labelColor = '#389E0D';
            case "Backend":
                return labelColor = '#722ED1';
            case "API":
                return labelColor = '#13C2C2';
            case "Issue":
                return labelColor = '#CF1322';

            default:
                break;
        }
        return labelColor;
    }
    getmemberImg = (member) => {
        let memberImg;
        switch (member) {
            case "user_2":
                return memberImg = './img/user_1.jpg';
            case "user_3":
                return memberImg = './img/user_2.jpg';
            case "user_4":
                return memberImg = './img/user_3.jpg';
            case "user_5":
                return memberImg = './img/user_4.jpg';
            default:
                break;
        }
        return memberImg;
    }
    handleEditing = () => {
        this.props.editTask(this.props.item);
    }
    render() {
        let { item, index } = this.props;
        //label
        let elmLabel = item.labelArr.map((label, index) => {
            return <i className="fa fa-circle" style={{ color: this.getLabelColor(label) }} key={index} />
        });
        let emlMember = item.memberIdArr.map((member, index) => {
            return <img src={this.getmemberImg(member)} className="user" alt="" key={index} />
        })
        //Prority
        let elmPriority;
        let classPriority;
        switch (parseInt(item.priority, 10)) {
            case 1:
                elmPriority = "Cao"
                classPriority = "text-danger"
                break;
            case 2:
                elmPriority = "Trung Bình"
                classPriority = "text-success"
                break;
            case 3:
                elmPriority = "Thấp"
                classPriority = "text-primary"
                break;
            default:
                break;
        }
        //Progress
        let classProgress;
        switch (parseInt(item.status, 10)) {
            case 1:
                classProgress = "fa-spinner"
                break;
            case 2:
                classProgress = "fa-anchor"
                break;
            case 3:
                classProgress = "fa-check-square-o"
                break;
            case 4:
                classProgress = "fa-trash-o"
                break;

            default:
                break;
        }
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">
                    {elmLabel}
                </td>
                <td className={`${classPriority} font-weight-bold text-center`}>{elmPriority}</td>
                <td className="text-center">

                    {emlMember}
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-outline-danger"
                        data-toggle="modal" data-target="#modalTask"
                        onClick={this.handleEditing}
                    >
                        Sửa
                    </button>
                    <div className="form-group d-inline ml-2">
                        <select
                            className="form-control d-inline"
                            style={{ width: "70%" }}
                            onChange={this.onChange}
                            name="selectedProgress"
                        >
                            <option value={1}>Đang tiến hành</option>
                            <option value={2}>Chưa bắt đầu</option>
                            <option value={3}>Hoàn thành</option>
                            <option value={4}>Hủy bỏ</option>
                        </select>
                    </div>
                    {/* <button type="button" className="btn btn-success">Xong</button>
                    <button type="button" className="btn btn-outline-danger">Xóa</button> */}
                </td>
                <td className="text-center">
                    {/* <i className="fa fa-check-square-o mr-2" /> */}
                    <i className={`fa ${classProgress} mr-2`} />
                    {/* <i className="fa fa-spinner mr-2"></i>
                    <i className="fa fa-anchor mr-2"></i> */}
                </td>
            </tr>
        )
    }
}
