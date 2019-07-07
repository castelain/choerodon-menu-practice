import React, { Component } from 'react';
import { Row, Col } from 'choerodon-ui';
import SubHeader from '../components/sub-header';
import MyCard from '../components/my-card';
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

class OrganizationOpt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
             // 主页次级导航的信息
             part: {
                type: 'home',
                title: '组织设置'
            },

            // 主页个人信息卡片的实体信息
            profileData: {
                title: '组织信息',
                operation: '更多组织信息',
                information: {
                    name: '注册的组织测试',
                    id: 'org-qebh68zd9k',
                    email: '---',
                    source: '...',
                    organization: '上海汉得信息技术股份有限公司'
                },
                content: 
                   <div>
                        <p>组织名称：注册的组织测试</p>
                        <p>组织编码：org-qebh68zd9k</p>
                        <p>我的角色：组织管理员</p>
                        <p>我参与的项目数（包括停用）：0</p>
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
 
export default OrganizationOpt1;