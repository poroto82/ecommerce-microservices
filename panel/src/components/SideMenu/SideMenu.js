import React, { useState } from 'react';
import {
    PieChartOutlined,
    ScheduleOutlined,
    SettingOutlined,
    TeamOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

import { Divider, Image, Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

const { Sider } = Layout;

export function SideMenu() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = ({ key }) => {
        const { target } = items.find(item => item.key === key) || {};
        if (target) {
            navigate(target);
        }
    };
    function getItem(label, key, icon, children, target) {
        return {
            key,
            icon,
            children,
            label,
            target,
        };
    }
    const items = [
        getItem('Dashboard', '1', <PieChartOutlined />, '', '/'),
        getItem('Products', '2', <ScheduleOutlined />, '', '/products'),
        getItem('Orders', '3', <ScheduleOutlined />, '', '/orders'),
        getItem('Customers', '4', <TeamOutlined />, '', '/customers'),
        getItem('Store', '5', <SettingOutlined />, '', '/customers'),
        getItem('Settings', '6', <SettingOutlined />, '', '/customers'),
        // getItem('User', 'sub1', <UserOutlined />, [
        //     getItem('Tom', '3'),
        //     getItem('Bill', '4'),
        //     getItem('Alex', '5'),
        // ]),
        // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
        getItem('Exit', '9', <LogoutOutlined />),
    ];

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <Content align="center" >
                <Image width={50} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
            </Content>
            <Divider></Divider>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} />
        </Sider>
    )
}