import React from 'react';
import { Form, Input, InputNumber, Button, Select, Upload, Tabs } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import BasicProductForm from '../components/ProductForm/BasicProductForm';
import CombinationProductForm from '../components/ProductForm/CombinationProductForm';
import PriceProductForm from '../components/ProductForm/PriceProductForm';
import SeoProductForm from '../components/ProductForm/SeoProductForm';

const { Option } = Select;

const ProductFormPage = () => {
    const onFinish = (values) => {
        console.log('Form values:', values);
        // Aquí podrías enviar los datos del formulario al servidor para su procesamiento
    };

    return (
        <Form
            name="basic_product_form"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            onFinish={onFinish}
        >
            <Tabs
                defaultActiveKey="1"
                centered
                tabBarExtraContent={<Button type="primary" htmlType="submit">Guardar Producto</Button>}
                items={
                    [
                        {
                            label: 'Basic Product',
                            key: "1",
                            children: <BasicProductForm></BasicProductForm>
                        },

                        {
                            label: 'Combinations',
                            key: "2",
                            children: <CombinationProductForm></CombinationProductForm>
                        },
                        {
                            label: 'Price',
                            key: "3",
                            children: <PriceProductForm></PriceProductForm>
                        },
                        {
                            label: 'SEO',
                            key: "4",
                            children: <SeoProductForm></SeoProductForm>
                        }
                    ]
                }
            />

        </Form>

    );
};

export default ProductFormPage;