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
                { this.props.dataSet.content }
            </Card>
        );
    }
}
 
export default ProfileCard;