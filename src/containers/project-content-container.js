import React, { Component } from 'react';
import { HashRouter as Router , Route, Switch } from 'react-router-dom';
import ProjectOpt1 from "./Project-opt-1";
import ProjectOpt2 from "./Project-opt-2";

class ProjectContentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Router>
                <Switch>
                    <Route path='/Project/opt-1' component={ ProjectOpt1 }></Route>
                    <Route path='/Project/opt-2' component={ ProjectOpt2 }></Route>
                    <Route component={ ProjectOpt1 }></Route>
                </Switch>
            </Router>
        );
    }
}
 
export default ProjectContentContainer;