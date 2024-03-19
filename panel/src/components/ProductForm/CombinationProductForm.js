import React, { useState } from 'react';
import { Button, Popconfirm, Table } from 'antd';
import EditableRow from '../EditableRow/EditableRow';
import EditableCell from '../EditableCell/EditableCell';

const CombinationProductForm = () => {

    const [dataSource, setDataSource] = useState([
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ]);
      const [count, setCount] = useState(2);
    
      const handleDelete = (key) => {
        const newData = dataSource.filter((item) => item.key !== key);
        setDataSource(newData);
      };
    
      const handleAdd = () => {
        const newData = {
          key: count,
          name: `Edward King ${count}`,
          age: '32',
          address: `London, Park Lane no. ${count}`,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
      };
    
      const handleSave = (row) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setDataSource(newData);
      };


const defaultColumns = [
    {
      title: 'Combination',
      dataIndex: 'name',
      width: '30%',
      editable: true,
    },
    {
      title: 'Quantity',
      dataIndex: 'age',
    },
    {
      title: 'Price Impact',
      dataIndex: 'address',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];

  

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );


};
export default CombinationProductForm;