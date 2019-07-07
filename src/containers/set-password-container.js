// import React, { Component } from 'react';
// import SubHeader from '../components/sub-header';
// import {
//     Form,
//     Input,
//     Row,
//     Col,
//     Button,
//   } from 'antd';
  
// class SetPassword extends Component {
//     state = {
//         confirmDirty: false,
//         // autoCompleteResult: [],
//         part: {
//             type: 'star',
//             title: '修改密码'
//         },
//     };
  
//     handleSubmit = e => {
//       e.preventDefault();
//       alert('submit');
//     //   console.log(e);
//       this.props.form.validateFieldsAndScroll((err, values) => {
//         if (!err) {
//             console.log('success');
//             alert('Received values of form: ', values);
//         }else {
//             alert('填写仍有错误，请重新填写后再提交！');

//         }
//       });
//     };
  
//     handleConfirmBlur = e => {
//       const { value } = e.target;
//         this.setState({ confirmDirty: this.state.confirmDirty || !!value });
//     };
  
//     oldPassword = (rule, value, callback) => {
//         const { form } = this.props;
//         if(value !== 'a') {
//             callback('原有密码输入错误，请重新填写！');
//         }
//     }

//     compareNewPassword = (rule, value, callback) => {
//       const { form } = this.props;
//       if (value && value !== form.getFieldValue('newPassword')) {
//         callback('您两次输入的密码不一致，请重新填写！');
//       } else {
//         callback();
//       }
//     };
  
//     newPassword = (rule, value, callback) => {
//       const { form } = this.props;
//       if (value && this.state.confirmDirty) {
//         form.validateFields(['compareNewPassword'], { force: true });
//       }
//       callback();
//     };
  
//     render() {
//       const { getFieldDecorator } = this.props.form;
//     //   const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
  
//       const formItemLayout = {
//         labelCol: {
//           xs: { span: 24 },
//           sm: { span: 8 },
//         },
//         wrapperCol: {
//           xs: { span: 24 },
//           sm: { span: 16 },
//         },
//       };
//       const tailFormItemLayout = {
//         wrapperCol: {
//           xs: {
//             span: 24,
//             offset: 0,
//           },
//           sm: {
//             span: 16,
//             offset: 8,
//           },
//         },
//       };
  
//       return (
//           <div>
//               <SubHeader part={ this.state.part }></SubHeader>
//               <Row style={{ marginTop: '.4rem' }}>
//                   <Col span={ 8 }>&nbsp;</Col>
//                   <Col span={ 8 }>
//                     <h2 style={{ textAlign: 'center' }}>修改用户密码</h2>
//                     <Form { ...formItemLayout } onSubmit={ this.handleSubmit }>
//                         <Form.Item label="原有密码" hasFeedback>
//                                 { getFieldDecorator('oldPassword', {
//                                 rules: [
//                                     {
//                                         required: true,
//                                         message: '请输入您原有的密码!',
//                                     },
//                                     {
//                                         validator: this.oldPassword,
//                                     },
//                                 ],
//                                 })(<Input.Password />)}
//                             </Form.Item>
//                         <Form.Item label="新密码" hasFeedback>
//                             { getFieldDecorator('newPassword', {
//                                 rules: [
//                                         {
//                                             required: true,
//                                             message: '请输入您的新密码!',
//                                         },
//                                         {
//                                             validator: this.newPassword,
//                                         },
//                                     ],
//                             })(<Input.Password />)}
//                         </Form.Item>
//                         <Form.Item label="确认密码" hasFeedback>
//                             {   getFieldDecorator('compareNewPassword', {
//                                 rules: [
//                                     {
//                                         required: true,
//                                         message: '请再次输入您的新密码!',
//                                     },
//                                     {
//                                         validator: this.compareNewPassword,
//                                     },
//                                 ],
//                             })(<Input.Password onBlur={ this.handleConfirmBlur } />)}
//                         </Form.Item>
//                         <Form.Item {...tailFormItemLayout}>
//                             {/* <Button style={{ marginRignt: '.05rem' }}>
//                                 取消
//                             </Button> */}
//                             <Button type="primary" htmlType="submit">
//                                 保存
//                             </Button>
//                         </Form.Item>
//                     </Form>
//                   </Col>
//                   <Col span={ 8 }>&nbsp;</Col>
//               </Row>
//           </div>
//       );
//     }
//   }
  
//   const SetPasswordContainer = Form.create({ name: 'form' })(SetPassword);

//   export default SetPasswordContainer;
  

import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { Card } from 'antd';
import SubHeader from '../components/sub-header';

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class SetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            part: {
                    type: 'star',
                    title: '修改密码',
                },
            oldPassword: 'a',
        }
    }
  componentDidMount() {
    // To disabled submit button at the beginning.
        this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if(values.oldPassword !== this.state.oldPassword) {
            alert('原有密码输入错误，请重新输入！')
        }else {
            if(values.newPassword !== values.confirmPassword) {
                alert('两次输入的新密码不一致，请重新输入！');
            }else {
                this.setState({
                    oldPassword: values.newPassword
                });
                alert('密码修改成功！');
            }
        }
      }
    });
  };

    oldPassword = (rule, value, callback) => {
        const { form } = this.props;
        if(value !== 'a') {
            callback('原有密码输入错误，请重新填写！');
        }
    }
        
    confirmPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('newPassword')) {
            callback('您两次输入的密码不一致，请重新填写！');
        } else {
            callback();
        }
    };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const oldPasswordError = isFieldTouched('oldPassword') && getFieldError('oldPassword');
    const newPasswordError = isFieldTouched('newPassword') && getFieldError('newPassword');
    const confirmPasswordError = isFieldTouched('confirmPassword') && getFieldError('confirmPassword');

    return (
        <div>
            <SubHeader part={ this.state.part }></SubHeader>
            <Row>
                <Col span={ 8 }>&nbsp;</Col>
                <Col span={ 8 }>
                <Card title="用户修改密码"  style={{ marginTop: '.3rem' }}>
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                            <Form.Item validateStatus={ oldPasswordError ? 'error' : ''} help={ oldPasswordError || '' }>
                                { getFieldDecorator('oldPassword', {
                                    rules: [
                                        { required: true, message: '请输入原始密码！' },     
                                    ],
                                })(
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="原有密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item validateStatus={ newPasswordError ? 'error' : '' } help={ newPasswordError || '' }>
                                { getFieldDecorator('newPassword', {
                                    rules: [
                                        { required: true, message: '请输入新密码！' },      
                                    ],
                                })(
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="新密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item validateStatus={ confirmPasswordError ? 'error' : '' } help={ confirmPasswordError || '' }>
                                { getFieldDecorator('confirmPassword', {
                                    rules: [
                                        { required: true, message: '请再次输入您的新密码！' },
                                    ],
                                })(
                                    <Input.Password
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.4)' }} /> }
                                        type="password"
                                        placeholder="再次输入新密码"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" disabled={ hasErrors(getFieldsError()) } style={{ width: '100%' }}>
                                    保存
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
                <Col span={ 8 }>&nbsp;</Col>
            </Row>
        </div>
      
    );
  }
}

const SetPasswordContainer = Form.create({ name: 'horizontal_login' })(SetPassword);

export default SetPasswordContainer;
