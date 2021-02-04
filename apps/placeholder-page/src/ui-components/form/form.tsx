import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, InputNumber } from 'antd';
import './form.scss';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 5 },
};
const tailLayout = {
  wrapperCol: { offset: 1, span: 5 },
};

const FormLead = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="forms"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormLead;