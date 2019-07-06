import React, { Component } from 'react';
import SubHeader from '../components/sub-header';

class OrganizationOpt1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
             // 主页次级导航的信息
             part: {
                type: 'account_balance',
                title: '首页'
            }
        }
    }
    render() { 
        return (
            <div>
                <SubHeader part={ this.state.part }></SubHeader>
                <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>问题设置</h1>
            </div>
        );
    }
}
 
export default OrganizationOpt1;