import React, { Component } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LinkItem from "../components/link-item";

class ProjectSettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    path: '/project/opt-1?id=68&name=2019研发中心实习生组',
                    title: '敏捷管理',
                    type: 'alert'
                },
                {
                    path: '/project/opt-2?id=68&name=2019研发中心实习生组',
                    title: '应用管理',
                    type: 'appstore'
                },
                {
                    path: '/',
                    title: '开发流水线',
                    type: 'tool'
                },
                {
                    path: '/',
                    title: '部署流水线',
                    type: 'branches'
                },
                {
                    path: '/',
                    title: 'API管理',
                    type: 'cloud-sync'
                },
                {
                    path: '/',
                    title: 'Wiki管理',
                    type: 'setting'
                },
                {
                    path: '/',
                    title: '报表',
                    type: 'fund'
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
 
export default ProjectSettingsContainer;