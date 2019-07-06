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
                <Row gutter={ 16 }>
                    <Col span={ 12 }>
                        <MyDropdown dropdownData={ this.props.dataSource.dropdownData }></MyDropdown>
                    </Col>
                    <Col span={ 12 }>
                        <MySearchInput ></MySearchInput>
                    </Col>
                </Row>
                <MyTable dataSource={ this.props.dataSource }></MyTable>
            </div>
        );
    }
}
 
export default ModelHomeContainer;