import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'choerodon-ui';
import MyHeader from '../containers/my-header';
import HomeContainer from '../containers/home-container';


const { Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render() { 
        return ( 
            <Layout>
                <MyHeader></MyHeader>
                <Content className='content-box'>
                    <Router>
                        <Switch>
                            <Route path='/' exact>
                                <HomeContainer></HomeContainer>
                            </Route>
                        </Switch>
                    </Router>
                </Content>
            </Layout>
        );
    }
}
 
export default Home;