import React from 'react';
import { Button, Space, Table } from 'antd';
import { Link } from 'react-router-dom';

export function CustomersTable({customers}) {

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'url',
            key: 'url',
        },
        {
            title: 'Phone',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="small">
                    <Link to={"/queues/"+record.id+"/manage"}><Button type='link'>Manage</Button></Link>
                    {/* <Button type='link' onClick={()=>handleEdit(record)}>Edit</Button> */}
                    <Button type='link'>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
        <Table columns={columns} dataSource={customers} />
        </div>
    )
}