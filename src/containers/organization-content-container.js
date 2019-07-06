import React, { Component } from 'react';
import { HashRouter as Router , Route, Switch } from 'react-router-dom';
import OrganizationOpt1 from "../containers/organization-opt-1";
import OrganizationOpt2 from "../containers/organization-opt-2";

class OrganizationContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Router>
                <Switch>
                    <Route path='/organization/opt-1' component={ OrganizationOpt1 }></Route>
                    <Route path='/organization/opt-2' component={ OrganizationOpt2 }></Route>
                    <Route component={ OrganizationOpt1 }></Route>
                </Switch>
            </Router>
        );
    }
}
 
export default OrganizationContentContainer;