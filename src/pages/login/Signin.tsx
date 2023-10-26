import React, { useContext } from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import axios from 'axios'
import { toastServices } from '~/utils/toastMessage'
import { AppContext } from '~/contexts/app.contexts'
type FieldType = {
  email?: string
  password?: string
}

const Signin: React.FC = () => {
  const {setProfile,profile} = useContext(AppContext)
  const onFinish = async (values: FieldType) => {
    console.log(values)
    const { data } = await axios.post('http://localhost:3000/users', values)
    localStorage.setItem('profile', JSON.stringify(data.user))
    setProfile(data.user)
    toastServices.success('Đăng Nhập Thành Công')
    console.log(data)
    console.log(profile)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item<FieldType>
        label='Username'
        name='email'
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button className='bg-blue-500' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Signin
