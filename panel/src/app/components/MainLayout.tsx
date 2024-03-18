'use client';
import React from 'react';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const { Header, Sider, Content } = Layout;


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>Opción 1</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>Opción 2</Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>Opción 3</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
          Encabezado
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;