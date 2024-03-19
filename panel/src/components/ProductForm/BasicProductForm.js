import React from 'react';
import { Form, Input, InputNumber, Button, Select, Upload, Cascader  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const options = [
    {
      value: 'inicio',
      label: 'inicio',
      children: [
        {
          value: 'electronica',
          label: 'electronica',
          children: [
            {
              value: 'radios',
              label: 'radios',
            },
            {
              value: 'tvs',
              label: 'tvs',
              disabled: true,
            },
          ],
        },
      ],
    },
    {
      value: 'moda',
      label: 'moda',
      children: [
        {
          value: 'vestidos',
          label: 'vestidos',
          children: [
            {
              value: 'floreados',
              label: 'floreados',
            },
          ],
        },
      ],
    },
  ];

const BasicProductForm = () => {
    
    const filter = (inputValue, path) =>
        path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    return (
        <>
            <Form.Item
                label="Tipo Producto"
                name="productName"

            >
                <Select
                    defaultValue="1"
                    options={[
                        { value: '1', label: 'Producto Simple' },
                        { value: '2', label: 'Producto Virtual' },
                        { value: '3', label: 'Producto con combinaciones' },
                    ]}
                />
            </Form.Item>

            <Form.Item
                label="Nombre del Producto"
                name="productName"
                rules={[{ required: true, message: 'Por favor ingresa el nombre del producto' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Descripción del Producto"
                name="productDescription"
                rules={[{ required: true, message: 'Por favor ingresa la descripción del producto' }]}
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label="Categoría"
                name="category"
                rules={[{ required: true, message: 'Por favor selecciona la categoría' }]}
            >
                <Cascader
                    options={options}
                    placeholder="Please select"
                    showSearch={{
                    filter,
                    }}
                    onSearch={(value) => console.log(value)}
                />
            </Form.Item>

            <Form.Item
                label="Supplier"
                name="supplier"
                rules={[{ required: true, message: 'Por favor selecciona la categoría' }]}
            >
                <Select placeholder="Selecciona la categoría">
                    <Option value="electronica">Electrónica</Option>
                    <Option value="ropa">Ropa</Option>
                    <Option value="hogar">Hogar</Option>
                    {/* Agrega más opciones de categoría según sea necesario */}
                </Select>
            </Form.Item>

            <Form.Item
                label="Carriers"
                name="carriers"
                rules={[{ required: true, message: 'Por favor selecciona la categoría' }]}
            >
                <Select placeholder="Selecciona la categoría">
                    <Option value="electronica">Electrónica</Option>
                    <Option value="ropa">Ropa</Option>
                    <Option value="hogar">Hogar</Option>
                    {/* Agrega más opciones de categoría según sea necesario */}
                </Select>
            </Form.Item>

            <Form.Item
                label="Ean"
                name="ean"
           >
                <Input />
            </Form.Item>

            <Form.Item
                label="Quantity"
                name="quantity"
                rules={[{ required: true, message: 'Por favor ingresa la cantidad de stock disponible' }]}
            >
                <InputNumber />
            </Form.Item>

            <Form.Item
                label="Imágenes"
                name="images"
                valuePropName="fileList"
                getValueFromEvent={(e) => {
                    if (Array.isArray(e)) {
                        return e;
                    }
                    return e && e.fileList;
                }}
                extra="Puedes subir múltiples imágenes del producto"
            >
                <Upload name="images" action="/upload.do" listType="picture">
                    <Button icon={<UploadOutlined />}>Subir Imágenes</Button>
                </Upload>
            </Form.Item>

            <Form.Item
                label="Caracteristicas"
                name="Caracteristicas"
            >
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="Caracteristicas"
                />
            </Form.Item>



        </>
    );
};

export default BasicProductForm;