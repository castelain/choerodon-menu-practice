import React, { Component } from 'react';
import { Icon, Popover, Button } from 'antd';
import ShortcutModal from '../components/shortcut-modal';
import "../styles/header.css";

const content = (
    <div>
        <p>添加快捷方式</p>
        <ShortcutModal></ShortcutModal>
    </div>
  );

class ShortcutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{ marginTop: '-.02rem', transform: 'scale(1.3)' }}>
                <Popover content={content} title="快捷方式" trigger="click">
                    <Button type='circle' style={{ color: 'white', backgroundColor: 'transparent', border: '0' }}>
                        <Icon type="appstore" />
                    </Button>
                </Popover>
            </div>
        );
    }
}
 
export default ShortcutContainer;