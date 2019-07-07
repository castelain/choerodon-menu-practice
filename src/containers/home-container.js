import React, { Component } from 'react';
import { Row, Col } from 'choerodon-ui';
import SubHeader from '../components/sub-header';
import MyCard from "../components/my-card";
import MySteps from '../components/my-steps';

const eventsData = {
    type: 'vertical',
    size: 'small',
    items: [
        {
            title: '开源多云技术平台——Choerodon猪齿鱼发布0.18版本',
            description: '2019-07-02 10:05:00'
        },
        {
            title: '开源多云技术平台——Choerodon猪齿鱼发布0.17版本',
            description: '2019-06-21 20:40:00'
        },
        {
            title: '开源多云技术平台——Choerodon猪齿鱼发布0.18版本',
            description: '2019-06-05 10:00:00'
        },
    ]
};

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
             // 主页次级导航的信息
             part: {
                type: 'account_balance',
                title: '首页'
            },

            // 主页个人信息卡片的实体信息
            profileData: {
                title: '我的信息',
                operation: '转至个人信息',
                content: 
                   <div>
                        <p>用户名：王秋莉</p>
                        <p>登录名：25156</p>
                        <p>邮箱：qiuli.wang@hand-china.com</p>
                        <p>认证来源：LDAP用户</p>
                        <p>所属组织：上海汉得信息技术股份有限公司</p>
                   </div>
            },

            // 主页公告卡片的实体信息
            noticeData: {
                title: '公告',
                operation: '转至所有公告',
                content: 
                    <div>
                        <MySteps stepsData={ eventsData }></MySteps>
                    </div>,
                
            }
        }
    }
    render() { 
        return (
            <div>
                <SubHeader part={ this.state.part }></SubHeader>
                <Row gutter={ 32 } style={{ padding: '0 6%' }}>
                    <Col span={ 8 } className="gutter-row">
                        <MyCard dataSet={ this.state.profileData } />
                    </Col>
                    <Col span={ 8 } className="gutter-row">
                        <MyCard dataSet={ this.state.noticeData } />
                    </Col>
                </Row>
            </div>
        );
    }
}
 
export default HomeContainer;