import React, { Component } from 'react';
import MyTable from "../components/my-table";
import { Row, Col } from "antd";
import MyDropdown from "../components/my-dropdown";
import MySearchInput from "../components/my-search-input";


class ModelHomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Row gutter={ 16 } style={{ marginBottom: '.2rem' }}>
                    <Col span={ 12 }>
                        <MyDropdown dropdownData={ this.props.dropdownData } style={{ borderBottom: '.02rem solid rgba(0, 0, 0, .1)'  }}></MyDropdown>
                    </Col>
                    <Col span={ 12 }>
                        <MySearchInput ></MySearchInput>
                    </Col>
                </Row>
                <MyTable tableData={ this.props.tableData } tableColumns={ this.props.tableColumns } handleBtnTextChange={ this.props.handleBtnTextChange }></MyTable>
            </div>
        );
    }
}
 
export default ModelHomeContainer;