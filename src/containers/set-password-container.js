import React, { Component } from 'react';
import SubHeader from '../components/sub-header';
import {
    Form,
    Input,
    Row,
    Col,
    Button,
  } from 'antd';
  
  class SetPassword extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        part: {
            type: 'star',
            title: '修改密码'
        },
    };
  
    handleSubmit = e => {
      e.preventDefault();
      alert('submit');
      this.props.form.validateFields((err, values) => {
        if (!err) {
          alert('Received values of form: ', values);
        }else {
            alert('填写仍有错误，请重新填写后再提交！');

        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    oldPassword = (rule, value, callback) => {
        const { form } = this.props;
        if(value !== '123456') {
            callback('原有密码输入错误，请重新填写！');
        }
    }

    compareNewPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('newPassword')) {
        callback('您两次输入的密码不一致，请重新填写！');
      } else {
        callback();
      }
    };
  
    newPassword = (rule, value, callback) => {
    //   const { form } = this.props;
    //   if (value && this.state.confirmDirty) {
    //     form.validateFields(['confirm'], { force: true });
    //   }
    //   callback();
    };
  
    render() {
      const { getFieldDecorator } = this.props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
  
      return (
          <div>
              <SubHeader part={ this.state.part }></SubHeader>
              <Row style={{ marginTop: '.4rem' }}>
                  <Col span={ 8 }>&nbsp;</Col>
                  <Col span={ 8 }>
                    <h2 style={{ textAlign: 'center' }}>修改用户密码</h2>
                    <Form { ...formItemLayout } onSubmit={ this.handleSubmit }>
                        <Form.Item label="原有密码" hasFeedback>
                                { getFieldDecorator('oldPassword', {
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入您原有的密码!',
                                    },
                                    {
                                        validator: this.oldPassword,
                                    },
                                ],
                                })(<Input.Password />)}
                            </Form.Item>
                        <Form.Item label="新密码" hasFeedback>
                            {getFieldDecorator('newPassword', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入您的新密码!',
                                },
                                {
                                    validator: this.newPassword,
                                },
                            ],
                            })(<Input.Password />)}
                        </Form.Item>
                        <Form.Item label="确认密码" hasFeedback>
                            {getFieldDecorator('compareNewPassword', {
                            rules: [
                                {
                                required: true,
                                message: '请再次输入您的新密码!',
                                },
                                {
                                validator: this.compareNewPassword,
                                },
                            ],
                            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                            {/* <Button style={{ marginRignt: '.05rem' }}>
                                取消
                            </Button> */}
                            <Button type="primary" htmlType="submit">
                                保存
                            </Button>
                        </Form.Item>
                    </Form>
                  </Col>
                  <Col span={ 8 }>&nbsp;</Col>
              </Row>
          </div>
      );
    }
  }
  
  const SetPasswordContainer = Form.create({ name: 'form' })(SetPassword);

  export default SetPasswordContainer;
  
