import React, { Component } from 'react';
import { Modal, Button, Input, Radio } from 'antd';

class ShortcutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            visible: false
        }
    }
    onChange = e => {
        this.setState({
          value: e.target.value,
        });
      }
    showModal = () => {
    this.setState({
        visible: true,
    });
    };

    handleOk = () => {
        this.setState({ visible: false });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
    const { visible } = this.state;
    return (
        <div>
        <Button type="primary" shape="circle" icon="plus" size='large' onClick={ this.showModal } />
            <Modal
                visible={ visible }
                title="创建快捷方式"
                onOk={ this.handleOk }
                onCancel={ this.handleCancel }
                footer={[
                        <Button key="cancel" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary"  onClick={ this.handleOk }>
                            确认
                        </Button>,
                    ]}
                >
                <Radio.Group onChange={ this.onChange } value={ this.state.value }>
                    <Radio value={ 1 }>添加当前页面</Radio>
                    <Radio value={ 2 }>添加其他页面</Radio>
                </Radio.Group>
                <Input placeholder='快捷方式名称' style={{ marginTop: '.14rem' }}></Input>
            </Modal>
        </div>
    );
    }
}
 
export default ShortcutModal;