import React, { Component } from 'react';
import { Layout, Row, Col } from 'choerodon-ui';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LogoStatic from '../components/logo-static';
import MenuIconContainer from '../containers/menu-icon-container';
import MyModalButton from '../components/my-modal-button';
import AvatarContainer from "../containers/avatar-container";
import ShortcutContainer from '../containers/shortcut-container';
import CourseContainer from "../containers/course-container";
import MessageContainer from "../containers/message-container";
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
                                <Route component={ MenuIconContainer }></Route>
                            </Switch>
                        </Router>
                    </Col>
                    <Col span={ 4 }>
                        <MyModalButton dropdownData={ this.props.dropdownData } tableData={ this.props.tableData } tableColumns={ this.props.tableColumns }></MyModalButton> 
                    </Col>
                    <Col span={ 12 }>
                        &nbsp; 
                    </Col>
                    <Col span={ 4 }>
                        <Row type="flex" justify="space-between">
                            <Col span={ 8 }>
                                <ShortcutContainer></ShortcutContainer>
                            </Col>
                            <Col span={ 6 }>
                                <CourseContainer></CourseContainer>
                            </Col>
                            <Col span={ 4 }>
                                <MessageContainer></MessageContainer>
                            </Col>
                            <Col span={ 6 }>
                                <AvatarContainer></AvatarContainer>
                            </Col>
                        </Row>
                    </Col>
                </Row> 
            </Header>  
        );
    }
}
 
export default MyHeader;