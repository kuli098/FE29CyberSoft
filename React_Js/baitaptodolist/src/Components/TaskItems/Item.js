import React, { Component } from 'react'

export default class Item extends Component {

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
        return labelColor
    }
    render() {
        let { item, index } = this.props;

        //label
        let elmLabel = item.labelArr.map((label, index) => {
            return <i className="fa fa-circle" style={{ color: this.getLabelColor(label) }} key={index} />
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
        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">
                    {elmLabel}
                </td>
                <td className={`${classPriority} font-weight-bold text-center`}>{elmPriority}</td>
                <td className="text-center">
                    <img src="./img/user_2.jpg" className="user" alt="" />
                    <img src="./img/user_3.jpg" className="user" alt="" />
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-outline-primary">Sửa</button>
                    <select className="form-control">
                        <option>Open this select menu</option>
                        <option value={1}>Đang tiến hành</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                    {/* <button type="button" className="btn btn-outline-success">Xong</button>
                    <button type="button" className="btn btn-outline-danger">Xóa</button> */}
                </td>
                <td className="text-center">
                    <i className="fa fa-check-square-o mr-2" />
                </td>
            </tr>
        )
    }
}
