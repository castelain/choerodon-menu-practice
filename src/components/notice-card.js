import React, { Component } from 'react';
import { Card } from 'choerodon-ui';

class NoticeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        );
    }
}
 
export default NoticeCard;