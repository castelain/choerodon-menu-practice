import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Layout } from 'choerodon-ui';
import MyHeader from '../containers/my-header';
import HomeContainer from '../containers/home-container';
import OrganizationContentContainer from "../containers/organization-content-container";
import ProjectContentContainer from "../containers/project-content-container";

const { Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 导航栏上的按钮模态框的数据源
           
            // 组织的下拉菜单的数据
            dropdownData: {
                data: [
                    {
                        key: 0,
                        name: '所有组织'
                    },
                    {
                        key: 1,
                        name: '注册的组织测试'
                    },
                    {
                        key: 2,
                        name: 'Choerodon'
                    },
                ],
                // 模态框中下拉列表的点击事件监听器
                onChangeKey: this.onChangeKey,
                // value: '所有组织'
            },
            
            // 所有的表格数据
            // FIXED: 模态框中的表格数据链接的跳转
            items: [
                {
                    key: '1',
                    id: 68,
                    name: <Link to={{ pathname: '/project/?id=68&name=2019研发中心实习组' }}>2019研发中心实习组</Link>,
                    nameStr: '2019研发中心实习组',
                    idStr: 'trainning',
                    typeName: '敏捷项目',
                    type: 'project'
                },
                {
                    key: '2',
                    id: 50,
                    name: <Link to = {{ pathname: '/organization/?id=50&name=注册的组织测试' }} >注册的组织测试</Link>,
                    nameStr: '注册的组织测试',
                    idStr: 'org-qebh68zd9k',
                    typeName: '组织',
                    type: 'organization'
                },
            ],
                
            columns: [
                {
                    title: '名称',
                    dataIndex: 'name',
                    key: 'name',
                },
                {
                    title: '编码',
                    dataIndex: 'id',
                    key: 'id',
                },
                {
                    title: '类型',
                    dataIndex: 'typeName',
                    key: 'typeName',
                },
            ],
        }
            
    }
    
    // 模态框中下拉列表的点击事件监听器
    onChangeKey = (key) => {
        // 根据在下拉框中选择类别的不同，得到不同的表格数据以及设置下拉框显示的数据
        if(key === '1') {
            this.setState({
                items: [
                    {
                        key: '2',
                        id: 50,
                        name: <Link to = {{ pathname: '/organization/?id=50&name=注册的组织测试' }} >注册的组织测试</Link>,
                        nameStr: '注册的组织测试',
                        idStr: 'org-qebh68zd9k',
                        typeName: '组织',
                        type: 'organization'
                    }
                ],
            });
        }else if(key === '2') {
            this.setState({
                items: [
                    {
                        key: '1',
                        id: 68,
                        name: <Link to={{ pathname: '/project/?id=68&name=2019研发中心实习组' }}>2019研发中心实习组</Link>,
                        nameStr: '2019研发中心实习组',
                        idStr: 'trainning',
                        typeName: '敏捷项目',
                        type: 'project'
                    }
                ]
            });
        }else {
            this.setState({
                items: [
                    {
                        key: '1',
                        id: 68,
                        name: <Link to={{ pathname: '/project/?id=68&name=2019研发中心实习组' }}>2019研发中心实习组</Link>,
                        nameStr: '2019研发中心实习组',
                        idStr: 'trainning',
                        typeName: '敏捷项目',
                        type: 'project'
                    },
                    {
                        key: '2',
                        id: 50,
                        name: <Link to = {{ pathname: '/organization/?id=50&name=注册的组织测试' }} >注册的组织测试</Link>,
                        nameStr: '注册的组织测试',
                        idStr: 'org-qebh68zd9k',
                        typeName: '组织',
                        type: 'organization'
                    },
                ]
            });
        }
    }
    render() { 
        return ( 
            <Layout>
                <MyHeader dropdownData={ this.state.dropdownData } tableData={ this.state.items } tableColumns={ this.state.columns } btnText={ this.state.btnText }></MyHeader>
                <Content className='content-box'>
                    <Router>
                        <Switch>
                            <Route path='/' exact component={ HomeContainer }>
                                {/* <HomeContainer></HomeContainer> */}
                            </Route>
                            <Route path='/organization' component={ OrganizationContentContainer }></Route>
                            <Route path='/project' component={ ProjectContentContainer }></Route>
                        </Switch>
                    </Router>
                </Content>
            </Layout>
        );
    }
}
 
export default Home;