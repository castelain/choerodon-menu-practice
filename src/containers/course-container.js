import React, { Component } from 'react';
import { Drawer, Button, Icon } from 'antd';

class CourseContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
    }
    onClose = () => {
        this.setState({
          visible: false,
        });
    }
    render() { 
        return (
            <div style={{ marginTop: '-.02rem', transform: 'scale(1.4)' }}>
                <Icon type='book' onClick={ this.showDrawer }></Icon>
                <Drawer
                    title="开始学习课程"
                    placement="right"
                    closable={false}
                    mask={ false }
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        );
    }
}
 
export default CourseContainer;