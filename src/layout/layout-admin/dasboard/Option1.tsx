import { Button, Input, Popconfirm, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Option1 = () => {
  const [dataIphone, setDataIphone] = useState([])
  const confirm = (id) => {
    console.log(id)
    message.success('Click on Yes')
  }

  const cancel = (e: any) => {
    console.log(e)
    message.error('Click on No')
  }
  useEffect(() => {
    const handelShowData = async () => {
      const { data } = await axios.get('http://localhost:8282/data?_page=1&_limit=10')
      setDataIphone(data)
    }
    handelShowData()
  }, [])
  const dataSource = dataIphone
    ?.filter((dataCheck: any) => dataCheck.company === 'Samsung')
    .map((item: any, index: any) => ({
      key: index,
      name: item.name
    }))
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: (
        <p style={{ color: 'red' }} className=''>
          actions
        </p>
      ),
      render: ({ key: id }: { key: any }) => (
        <div className='space-x-4'>
          <Popconfirm
            title='Delete the task'
            description='Are you sure to delete this task?'
            onConfirm={() => confirm(id)}
            onCancel={cancel}
            okText='Yes'
            cancelText='No'
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button className='text-red-500'>edit</Button>
        </div>
      )
    }
  ]
  return (
    <div>
      <div>
        <Input size='large' placeholder='large size' />
        <Button type='primary'>Primary Button</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  )
}

export default Option1
