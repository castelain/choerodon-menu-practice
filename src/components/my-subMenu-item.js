import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

class MySubMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        let menuItem;
        if(this.props.subMenuItem.items) {
            menuItem = 
                <SubMenu
                    key={ this.props.subMenuItem.key }
                    title={
                        <span>
                            <Icon type={ this.props.subMenuItem.type } />
                            <span>{ this.props.subMenuItem.title }</span>
                        </span>
                    }
                >
                    {
                        this.props.subMenuItem.items.map((item, index) => 
                            <Menu.Item key={ item.key }>{ item.title }</Menu.Item>
                        )
                    }
                </SubMenu>
        }else {
            menuItem = 
                <Menu.Item key={ this.props.subMenuItem.key }>
                    <Icon type={ this.props.subMenuItem.type } />
                    <span>{ this.props.subMenuItem.title }</span>
                </Menu.Item>
        }
        return (
            menuItem
        );
    }
}
 
export default MySubMenuItem;