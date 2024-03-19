
import React, { useState, useEffect } from "react";

import {
    PlusOutlined,

} from '@ant-design/icons';

import { FloatButton } from "antd";
import { ProductsTable } from "../components/ProductsTable/ProductsTable";
import { CustomersTable } from "../components/CustomersTable/CustomersTable";


export const CustomersPage = () => {

    const [customers, setCustomers] = useState([])

    return (
        <div>
            <CustomersTable customers={customers}></CustomersTable>
            
            <FloatButton
                icon={<PlusOutlined />}
                type="primary"
                style={{
                    right: 40,
                    bottom: 80,
                    height: 60,
                    width: 60
                }}
            />
            
            {/* <FormQueue queue={queue} formOpen={formOpen} setFormOpen={setFormOpen}></FormQueue> */}
            
        </div>
    )
}