import React, { Component } from 'react';
import { Row, Col } from 'choerodon-ui';
import SubHeader from '../components/sub-header';
import ProfileCard from '../components/profile-card';
import NoticeCard from '../components/notice-card';

class OrganizationOpt1 extends Component {
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
                title: '组织信息',
                operation: '转至个人信息',
                information: {
                    name: '注册的组织测试',
                    id: 'org-qebh68zd9k',
                    email: '---',
                    source: '...',
                    organization: '上海汉得信息技术股份有限公司'
                }
            },

            // 主页公告卡片的实体信息
            noticeData: {
                title: '公告',
                operation: '转至所有公告',
                eventsData: {
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
                }
            }
        }
    }
    render() { 
        return (
            <div>
                <SubHeader part={ this.state.part }></SubHeader>
                <Row gutter={ 32 } style={{ padding: '0 6%' }}>
                    <Col span={ 8 } className="gutter-row">
                        <ProfileCard dataSet={ this.state.profileData } />
                    </Col>
                    <Col span={ 8 } className="gutter-row">
                        <NoticeCard dataSet={ this.state.noticeData } />
                    </Col>
                </Row>
            </div>
        );
    }
}
 
export default OrganizationOpt1;