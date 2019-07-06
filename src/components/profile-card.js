import React, { Component } from 'react';
import { Card } from 'choerodon-ui';

class ProfileCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Card title={ this.props.dataSet.title } extra={<a href="#">{ this.props.dataSet.operation }</a>} className="card-box">
                <p>用户名：{ this.props.dataSet.information.name }</p>
                <p>登录名：{ this.props.dataSet.information.id }</p>
                <p>邮箱：{ this.props.dataSet.information.email }</p>
                <p>认证来源：{ this.props.dataSet.information.source }</p>
                <p>所属组织：{ this.props.dataSet.information.organization }</p>
            </Card>
        );
    }
}
 
export default ProfileCard;