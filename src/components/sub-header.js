import React, { Component } from 'react';
import { Icon, Layout } from 'choerodon-ui';
import '../styles/sub-header.css';

const { Header } = Layout;

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Header id='sub-header-box' style={{ color: 'rgba(0, 0, 0, .6)' }}>
                <Icon type={ this.props.part.type } className='sub-header-icon' />
                <span className='sub-header-text'>{ this.props.part.title }</span>
            </Header>
        );
    }
}
 
export default SubHeader;