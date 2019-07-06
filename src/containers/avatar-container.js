import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Popover, Button, Divider } from 'antd';
import MyAvatar from '../components/my-avatar';
import LinkItem from "../components/link-item";

const userSettings = [
    {
        type: 'user',
        path: '/',
        title: '个人信息'
    },
    {
        type: 'key',
        path: '/',
        title: '修改密码'
    },
    {
        type: 'security-scan',
        path: '/',
        title: '权限信息'
    },
    {
        type: 'audit',
        path: '/',
        title: '授权管理'
    },
    {
        type: 'message',
        path: '/',
        title: '消息通知'
    },
    {
        type: 'export',
        path: '/',
        title: '退出登录'
    }
];

const content = (
    <div>
        <Router>
            {
                userSettings.splice(0, userSettings.length - 2).map((item, index) => 
                    <LinkItem path={ item.path } title={ item.title } type={ item.type } key={ index }></LinkItem>
                )
            }
            <Divider />
        <LinkItem path={ userSettings[userSettings.length-1].path } title={ userSettings[userSettings.length-1].title } type={ userSettings[userSettings.length-1].type }></LinkItem>
        </Router>
    </div>
);

class AvatarContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Popover content={content} title="用户设置" trigger="click">
                    <Button style={{ backgroundColor: 'transparent' }} type="link"><MyAvatar></MyAvatar></Button>
                </Popover>
            </div>
        );
    }
}
 
export default AvatarContainer;