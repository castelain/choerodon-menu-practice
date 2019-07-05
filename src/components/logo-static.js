import React, { Component } from 'react';
import { Icon } from 'choerodon-ui';
import '../styles/logo.css';

class LogoStatic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <Icon type="local_cafe" className="logo" />
                <h2 className='logo-text'>Choerodon</h2>
            </div>
        );
    }
}
 
export default LogoStatic;