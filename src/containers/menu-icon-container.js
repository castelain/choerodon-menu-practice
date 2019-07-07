import React, { Component } from 'react';
import { Drawer, Button } from 'antd';
import { HashRouter as Router , Route, Switch } from 'react-router-dom';
import LogoDynamic from '../components/logo-dynamic';
import OrganizationSettingsContainer from "../containers/organization-settings-container";
import ProjectSettingsContainer from "../containers/project-settings-container";

class MenuIconContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false }
    }

    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };    

    render() { 
        return (
            <div>
                <Button type="link" onClick={ this.showDrawer }>
                    <LogoDynamic></LogoDynamic>
                </Button>
                <Drawer
                    title="主页"
                    placement="left"
                    closable={ false }
                    onClose={ this.onClose }
                    visible={ this.state.visible }
                    style={{ marginTop: '.55rem' }}
                >
                <Router>
                    <Switch>
                        <Route path='/project' component={ ProjectSettingsContainer }></Route>
                        <Route path='/organization' component={ OrganizationSettingsContainer }></Route>
                    </Switch>
                </Router>
                </Drawer>
            </div>
        );
    }
}
 
export default MenuIconContainer;