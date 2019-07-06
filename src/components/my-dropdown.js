import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';

class MyDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const onClick = ({ key }) => {
            this.props.dropdownData.onChangeKey(key);
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
                    所有组织 <Icon type="down" />
                </div>
            </Dropdown>
        );
    }
}
 
export default MyDropdown;