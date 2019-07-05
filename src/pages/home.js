import React, { Component } from 'react';
import { Layout } from 'choerodon-ui';
import MyHeader from '../containers/my-header';
import '../styles/header.less';

const { Header, Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Layout>
                <Header id="header-bg">
                    <MyHeader></MyHeader>
                </Header>
                <Content>Here is homepage's content!</Content>
            </Layout>
        );
    }
}
 
export default Home;