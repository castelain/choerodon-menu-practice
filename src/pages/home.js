import React, { Component } from 'react';
import { Layout } from 'choerodon-ui';
import MyHeader from '../containers/my-header';
import SubHeader from '../components/sub-header';


const { Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            part: {
                type: 'account_balance',
                title: '首页'
            }
        }
    }
    render() { 
        return ( 
            <Layout>
                <MyHeader></MyHeader>
                <Content>
                    <SubHeader part={ this.state.part }></SubHeader>
                    Here is homepage's content!</Content>
            </Layout>
        );
    }
}
 
export default Home;