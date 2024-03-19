import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
//import { useAuth } from '../../hooks/useAuth';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { SideMenu } from "../SideMenu/SideMenu";

const {  Content, Footer } = Layout;

export function ProtectedLayout() {

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <SideMenu />
      <Layout>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: '100%',
              background: 'white',
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          ©2024
        </Footer>
      </Layout>
    </Layout>
  )
}