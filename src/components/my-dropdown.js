import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';

class MyDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        const onClick = ({ key }) => {
            message.info(`Click on item ${key}`);
          };
          
        const menu = (
            <Menu onClick={onClick}>
                {
                    this.props.dropdownData.map((item) => 
                        <Menu.Item key={ item.key }>{ item.name }</Menu.Item>
                    )
                }
            </Menu>
          );
        return (
            <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" href="#">
                    所有组织 <Icon type="down" />
                </a>
            </Dropdown>
        );
    }
}
 
export default MyDropdown;