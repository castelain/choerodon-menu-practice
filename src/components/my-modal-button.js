import React, { Component } from 'react';
import { Modal, Button, Icon } from 'antd';
import ModelHomeContainer from '../containers/model-home-container'
import '../styles/button.css'

class MyModalButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '选择项目'
        }
    }
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div style={{ marginTop: '-0.04rem' }}>
                <Button type="link" block onClick={ this.showModal } className='modal-btn-header'>
                    <Icon type="project" theme="filled" />
                    { this.state.value }
                    <Icon type="caret-down" />
                </Button>
                <Modal
                    title="选择"
                    visible={ this.state.visible }
                    onOk={ this.handleOk }
                    onCancel={ this.handleCancel }
                    okButtonProps={{ disabled: true }}
                    cancelButtonProps={{ disabled: true }}
                    footer={[
                        <Button key="back" onClick={ this.handleCancel }>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={ this.handleOk }>
                            打开
                        </Button>,
                    ]}
                >
                    <ModelHomeContainer dataSource={ this.props.dataSource }></ModelHomeContainer>
                </Modal>
            </div>
        );
    }
}
 
export default MyModalButton;