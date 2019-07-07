import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import { Drawer, Icon, Button, Empty } from 'antd';

class MessageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showDrawer = () => {
        this.setState({
          visible: !this.state.visible,
        });
    }
    onClose = () => {
        this.setState({
          visible: false,
        });
    }
    render() { 
        return (
            <div style={{ marginTop: '-.02rem', transform: 'scale(1.4)', color: 'white' }}>
                <Icon type='bell' onClick={ this.showDrawer } ></Icon>
                <Drawer
                    title="消息通知"
                    placement="right"
                    closable={ true }
                    mask={ false }
                    onClose={ this.onClose }
                    visible={ this.state.visible }
                    zIndex={ 90 }
                    style={{ marginTop: '.55rem' }}
                    width={ 480 }
                    >
                    <div style={{ marginTop: '-.16rem' }}>
                        <Router>
                            <Link to='/'>查看所有消息</Link>
                        </Router>
                        <Button type='link'>全部清除</Button>
                    </div>
                    <Empty image={ Empty.PRESENTED_IMAGE_SIMPLE }  description='暂时没有站内消息' style={{ transform: 'scale(1.2)' }} />
                </Drawer>
            </div>
        );
    }
}
 
export default MessageContainer;