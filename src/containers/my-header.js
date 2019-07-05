import React, { Component } from 'react';
import { Menu } from 'choerodon-ui';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import LogoStatic from '../components/logo-static';
import LogoDynamic from '../components/logo-dynamic';


class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Router>
                <Switch>
                    <Route path='/' component={ LogoStatic } exact></Route>
                    <Route component={ LogoDynamic }></Route>
                </Switch>
            </Router>     
        );
    }
}
 
export default MyHeader;