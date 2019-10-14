import React, { Component } from 'react'

export default class DemoVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: 'iphoneX', gia: 1000 },
                { maSP: 2, tenSP: 'Note10', gia: 2000 },
                { maSP: 3, tenSP: 'K20 Pro', gia: 3000 }
            ]
        }
    }
    renderTable = () => {
        let contentTable = [];
        // cach1
        // for (let i = 0; i < this.state.mangSanPham.length; i++) {
        //     let sp = this.state.mangSanPham[i];
        //     contentTable.push(
        //         <tr key={i}>
        //             <td>{sp.maSP}</td>
        //             <td>{sp.tenSP}</td>
        //             <td>{sp.gia}</td>
        //         </tr>);
        // }
        // return contentTable;

        // cach2
        return this.state.mangSanPham.map((sp, index) => {
            return <tr key={index}>
                <td>{sp.maSP}</td>
                <td>{sp.tenSP}</td>
                <td>{sp.gia}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma san pham</th>
                            <th>Ten san pham</th>
                            <th>Gia san pham</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}
