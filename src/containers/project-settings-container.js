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


// import React, { Component } from 'react';
// import MySubMenuItem from "../components/my-subMenu-item";
// import { HashRouter as Router } from "react-router-dom";
// import { Menu } from 'antd';

// function handleClick(e) {
//     console.log('click', e);
// }

// class ProjectSettingsContainer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: [
//                 {
//                     path: '/project/opt-1?id=68&name=2019研发中心实习生组',
//                     title: '敏捷管理',
//                     type: 'alert',
//                     key: 'opt1',
//                     items: [
//                         {
//                             key: 'opt1-1',
//                             title: '代办事项'
//                         },
//                         {
//                             key: 'opt1-2',
//                             title: '活跃冲刺'
//                         },
//                         {
//                             key: 'opt1-3',
//                             title: '故事地图'
//                         },
//                         {
//                             key: 'opt1-4',
//                             title: '问题管理'
//                         },
//                         {
//                             key: 'opt1-5',
//                             title: '问题管理'
//                         },
//                         {
//                             key: 'opt1-6',
//                             title: '发布版本'
//                         },
//                     ]
//                 },
//                 {
//                     path: '/project/opt-2?id=68&name=2019研发中心实习生组',
//                     title: '应用管理',
//                     type: 'appstore',
//                     key: 'opt2',
//                     items: []
//                 },
//                 {
//                     path: '/',
//                     title: '开发流水线',
//                     type: 'tool',
//                     key: 'opt3',
//                     items: []
//                 },
//                 {
//                     path: '/',
//                     title: '部署流水线',
//                     type: 'branches',
//                     key: 'opt4',
//                     items: []
//                 },
//                 {
//                     path: '/',
//                     title: 'API管理',
//                     type: 'cloud-sync',
//                     key: 'opt5',
//                     items: []
//                 },
//                 {
//                     path: '/',
//                     title: 'Wiki管理',
//                     type: 'setting',
//                     key: 'opt6',
//                     items: []
//                 },
//                 {
//                     path: '/',
//                     title: '报表',
//                     type: 'fund',
//                     key: 'opt7',
//                     items: []
//                 },
//             ]
//         }
//     }
    
//     render() { 
//         return (
//             <div>
//                 <Menu onClick={ handleClick } style={{ width: 256 }} mode="vertical">
//                     <Router>
//                         {
//                             this.state.data.map((item, index) => 
//                                 <MySubMenuItem subMenuItem={ item } key={ index }></MySubMenuItem>
//                             )
//                         }
//                     </Router>
//                 </Menu>
//             </div>
//         );
//     }
// }
 
// export default ProjectSettingsContainer;