import React, { Component } from 'react';
import { Avatar } from 'antd';

class MyAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Avatar style={{ color: 'rgb(63, 81, 181)', backgroundColor: 'rgb(197, 203, 232)', marginTop: '-0.14rem', }}><b><b>王</b></b></Avatar>
        );
    }
}

export default MyAvatar;