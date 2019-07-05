import React, { Component } from 'react';
import { Icon } from 'choerodon-ui';
import '../styles/logo.css';

class LogoDynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Icon type="menu"  className="logo" />
                <h2 className='logo-text'>Choerodon</h2>
            </div>
         );
    }
}
 
export default LogoDynamic;