import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LinkItem from "../components/link-item";

class OrganizationSettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    path: '/organization/opt-1?id=50&name=注册的组织测试',
                    title: '组织设置',
                    type: 'apartment'
                },
                {
                    path: '/organization/opt-2?id=50&name=注册的组织测试',
                    title: '问题设置',
                    type: 'home'
                },
                {
                    path: '/',
                    title: 'DevOps管理',
                    type: 'bulb'
                },
                {
                    path: '/',
                    title: '应用管理',
                    type: 'table'
                },
                {
                    path: '/',
                    title: '知识管理',
                    type: 'read'
                },
                {
                    path: '/',
                    title: 'Wiki管理',
                    type: 'setting'
                },
                {
                    path: '/',
                    title: '任务调度',
                    type: 'book'
                },
            ]
        }
    }
    render() { 
        return (
            <div>
                <Router>
                    {
                        this.state.data.map((item, index) => 
                            <LinkItem path={ item.path } type={ item.type } title={ item.title } key={ index }></LinkItem>
                        )
                    }
                </Router>
            </div>
        );
    }
}
 
export default OrganizationSettingsContainer;