import React, { Component } from 'react';
import { Card } from 'choerodon-ui';
import MySteps from '../components/my-steps';

class NoticeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Card title={ this.props.dataSet.title } extra={<a href="#">{ this.props.dataSet.operation }</a>} style={{ width: 400 }}  className="card-box">
                <MySteps stepsData={ this.props.dataSet.eventsData }></MySteps>
            </Card>
        );
    }
}
 
export default NoticeCard;