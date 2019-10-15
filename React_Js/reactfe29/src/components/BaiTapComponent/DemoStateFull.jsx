import React, { Component } from 'react'

export default class DemoStateFull extends Component {
    getTitle = (color) => {
        //Xử lý .... trả về 1 object jsx
        //Định nghĩa css trong jsx => tham số dưới dạng object style
        let objectStyle = {color:color};
        //style = {giá trị object style}
        let title = 'cybersoft frontend 29';
        return <h3 style={objectStyle}>{title}</h3>
    }

    render() { //Phương thức render chứa nội dung component
       let  headerName ='frontend 29';
        return (
            <div>
               {headerName}
               {/* phương thức getTitle trả về giá trị là 1 đoạn jsx */}
               {this.getTitle('red')}
            </div>
        )
    }
}
