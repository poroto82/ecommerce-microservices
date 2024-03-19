import React from 'react';
import { Form, Input, InputNumber, Button, Select, Upload, Tabs } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const PriceProductForm = () => {


    return (
        <>

            <Form.Item
                label="Precio unitario del Producto"
                name="unitPrice"
                rules={[{ required: true, message: 'Por favor ingresa el nombre del producto' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Tax"
                name="unitPrice"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Precio con impuestos"
                name="unitPrice"
           >
                <Input />
            </Form.Item>


        </>
    );
};

export default PriceProductForm;