import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Table } from 'antd';
import { getSearchKey } from "../utils/route-tools";

 // 绑定click事件监听器的环境
// const handleRow = (record, rowId) => {
//     return {
//         onClick: handleClick.bind(this, record, rowId)
//     };
// };

class MyTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }

    // click事件监听器的处理逻辑在这
    handleClick = (record, rowId) => {
        // alert("record: ", record.name, rowId);
        // this.props.handleBtnTextChange(record.nameStr);
        let searchName = getSearchKey('name');
        this.props.handleBtnTextChange(searchName);
    }

    render() { 
        return (
           <Router>
               {/* 为每一行表格数据添加click的事件监听器 */}
                <Table dataSource={ this.props.tableData }  columns={ this.props.tableColumns } onRow={ (record, rowId) => {
                    // alert('record: ' + record.key);
                    // console.log(record.name.toString());
                    return {
                        onClick: this.handleClick.bind(this, record, rowId)
                    }
                } }/>
           </Router>
        );
    }
}
 
export default MyTable;