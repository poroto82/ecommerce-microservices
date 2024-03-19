import React from 'react';
import { Form, Input, Select } from 'antd';

const SeoProductForm = () => {

    return (
        <>
            <Form.Item
                label="Título SEO"
                name="seoTitle"
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Descripción SEO"
                name="seoDescription"
            >
                <Input.TextArea />
            </Form.Item>

            <Form.Item
                label="Palabras Clave SEO"
                name="seoKeywords"
            >
                <Input.TextArea placeholder="Separa las palabras clave con comas" />
            </Form.Item>
        </>
    );
};

export default SeoProductForm;