import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SetPasswordContainer from '../containers/set-password-container';

class UserSettingsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Router>
                <Switch>
                    <Route path="/user-settings/password" component={ SetPasswordContainer } exact></Route>
                </Switch>
            </Router>
        );
    }
}
 
export default UserSettingsContainer;