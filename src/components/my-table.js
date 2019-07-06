import React, { Component } from 'react';
import { Table } from 'antd';

class MyTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Table dataSource={ this.props.dataSource.items } columns={ this.props.dataSource.columns } />
        );
    }
}
 
export default MyTable;