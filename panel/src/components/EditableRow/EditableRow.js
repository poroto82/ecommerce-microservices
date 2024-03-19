// EditableRow.js
import React from 'react';
import { Form } from 'antd';

const EditableRow = ({ index, form, ...props }) => (
  <Form form={form} component={false}>
    <tr {...props} />
  </Form>
);

export default EditableRow;
