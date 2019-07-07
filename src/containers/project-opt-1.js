import React, { Component } from 'react';
import { Row, Col } from 'choerodon-ui';
import SubHeader from '../components/sub-header';
import MyCard from '../components/my-card';

class ProjectOpt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
             // 主页次级导航的信息
             part: {
                type: 'home',
                title: '敏捷管理'
            },

            cardData: {
                title: '项目信息',
                operation: '查看更多信息',
                content: 
                    <div>
                        <p>项目名称：2019研发中心实习生组</p>
                        <p>项目编码：trainning</p>
                        <p>项目类型：敏捷项目</p>
                        <p>所属组织：Choerodon</p>
                        <p>我的角色：项目所有者</p>
                    </div>
            }
        }
    }
    render() { 
        return (
            <div>
                <SubHeader part={ this.state.part }></SubHeader>
                <Row gutter={ 32 } style={{ padding: '0 6%' }}>
                    <Col span={ 8 } className="gutter-row">
                        <MyCard dataSet={ this.state.cardData } />
                    </Col>
                    <Col span={ 8 } className="gutter-row">
                       
                    </Col>
                </Row>
            </div>
        );
    }
}
 
export default ProjectOpt1;