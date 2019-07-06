import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from "antd";

class LinkItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{ marginBottom: '.15rem', color: 'rgba(0, 0, 0, .4)' }}>
                <Link to={ this.props.path }  className='text-title'>
                    <Icon type={ this.props.type } style={{ marginRight: '.06rem' }} />
                    { this.props.title }
                </Link>
            </div>
        );
    }
}
 
export default LinkItem;