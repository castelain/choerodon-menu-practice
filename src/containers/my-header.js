import React, { Component } from 'react';
import { Layout, Row, Col } from 'choerodon-ui';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LogoStatic from '../components/logo-static';
import LogoDynamic from '../components/logo-dynamic';
import MyModalButton from '../components/my-modal-button';
import '../styles/header.css';

const { Header } = Layout;

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Header id="header-box">
                <Row gutter={ 16 }>
                    <Col span={ 4 }>
                        <Router>
                            <Switch>
                                <Route path='/' component={ LogoStatic } exact></Route>
                                <Route component={ LogoDynamic }></Route>
                            </Switch>
                        </Router>
                    </Col>
                    <Col span={ 4 }>
                        <MyModalButton dropdownData={ this.props.dropdownData } tableData={ this.props.tableData } tableColumns={ this.props.tableColumns }></MyModalButton> 
                    </Col>
                </Row> 
            </Header>  
        );
    }
}
 
export default MyHeader;