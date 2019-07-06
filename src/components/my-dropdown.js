import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
};

class MyDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '所有组织'
        }
    }
    render() {
        const onClick = ({ key }) => {
            // 根据选择类别的不同，改变表格数据以及显示框中的数据
            
            this.props.dropdownData.onChangeKey(key);
            
            if(key === '1') {
                this.setState({
                    value: '注册的组织测试'
                });
            }else if(key === '2') {
                this.setState({
                    value: 'Choerodon'
                });
            }else {
                this.setState({
                    value: '所有组织'
                });
            }
          };
          
        const menu = (
            <Menu onClick={ onClick }>
                {
                    this.props.dropdownData.data.map((item) => 
                        <Menu.Item key={ item.key }>{ item.name }</Menu.Item>
                    )
                }
            </Menu>
          );
        return (
            <Dropdown overlay={ menu }>
                <div style={{ borderBottom: '.0125rem solid rgba(0, 0, 0, .1 )', width: '100%', paddingBottom: '.065rem', color: 'rgba(0, 0, 0, .6)' }}>
                    { this.state.value }
                    <Icon type="down" />
                </div>
            </Dropdown>
        );
    }
}
 
export default MyDropdown;