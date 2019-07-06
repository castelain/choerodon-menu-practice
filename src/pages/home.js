import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'choerodon-ui';
import MyHeader from '../containers/my-header';
import HomeContainer from '../containers/home-container';


const { Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 导航栏上的按钮模态框的数据源
            projectData: {
                // 组织的下拉菜单的数据
                dropdownData: [
                    {
                        key: 1,
                        name: '所有组织'
                    },
                    {
                        key: 2,
                        name: '注册的组织测试'
                    },
                    {
                        key: 3,
                        name: 'Choerodon'
                    },
                ],
                // 所有的表格数据
                items: [
                    {
                      key: '1',
                      name: '2019研发中心实习组',
                      id: 'trainning',
                      typeName: '敏捷项目',
                      type: 'project'
                    },
                    {
                      key: '2',
                      name: '注册的组织测试',
                      id: 'org-qebh68zd9k',
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
    }
    render() { 
        return ( 
            <Layout>
                <MyHeader dataSource={ this.state.projectData }></MyHeader>
                <Content className='content-box'>
                    <Router>
                        <Switch>
                            <Route path='/' exact>
                                <HomeContainer></HomeContainer>
                            </Route>
                        </Switch>
                    </Router>
                </Content>
            </Layout>
        );
    }
}
 
export default Home;