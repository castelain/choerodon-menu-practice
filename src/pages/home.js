import React, { Component } from 'react';
import { Layout, Row, Col } from 'choerodon-ui';
import MyHeader from '../containers/my-header';
import SubHeader from '../components/sub-header';
import ProfileCard from '../components/profile-card';
import NoticeCard from '../components/notice-card';

const { Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 次级导航的信息
            part: {
                type: 'account_balance',
                title: '首页'
            },

            // 主页卡片的实体信息
            profileData: {
                title: '我的信息',
                information: {
                    name: '王秋莉',
                    id: '25156',
                    email: 'qiuli.wang@hand-china.com',
                    source: 'LDAP用户',
                    organization: '上海汉得信息技术股份有限公司'
                }
            },
        }
    }
    render() { 
        return ( 
            <Layout>
                <MyHeader></MyHeader>
                <Content className='content-box'>
                    <SubHeader part={ this.state.part }></SubHeader>
                    <Row gutter={ 32 } style={{ padding: '0 6%' }}>
                        <Col span={ 8 } className="gutter-row">
                            <ProfileCard dataSet={ this.state.profileData } />
                        </Col>
                        <Col span={ 8 } className="gutter-row">
                            <NoticeCard dataSet={ this.state.profileData } />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        );
    }
}
 
export default Home;