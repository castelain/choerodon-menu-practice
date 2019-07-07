import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Drawer, Icon, Divider } from 'antd';
import LinkItem from "../components/link-item";

class CourseContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showDrawer = () => {
        this.setState({
          visible: !this.state.visible
        });
    }
    onClose = () => {
        this.setState({
          visible: false,
        });
    }
    render() { 
        return (
            <div style={{ marginTop: '-.02rem', transform: 'scale(1.3)', color: 'white' }}>
                <Icon type='book' onClick={ this.showDrawer } ></Icon>
                <Drawer
                    title="开始学习课程"
                    placement="right"
                    closable={ true }
                    mask={ false }
                    onClose={ this.onClose }
                    visible={ this.state.visible }
                    zIndex={ 90 }
                    style={{ marginTop: '.55rem' }}
                    width={ 300 }
                    >
                    <Router>
                        <LinkItem path='/' title='Choerodon平台基本设置' type='book'></LinkItem>
                    </Router>
                    <p className='text-info' style={{ fontSize: '.05rem' }}>通过教程了解Choerodon产品和服务</p>
                    <p>了解如何管理组织、创建角色、分享平台校色和Root权限，系统自定义设置等平台层基本操作</p>
                    <Divider />
                </Drawer>
            </div>
        );
    }
}
 
export default CourseContainer;