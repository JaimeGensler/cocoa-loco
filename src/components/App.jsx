import React from 'react';

import { Layout, Menu, Icon } from 'antd';
import Expander from './Expander';
import BevvyList from './BevvyList';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
    return (
        <Layout>
            <Header>
                <h1 style={{ color: 'white' }}>What up</h1>
            </Header>
            <Layout>
                <Sider></Sider>
                <Content
                    style={{ backgroundColor: '#f0f0f0', padding: '2rem' }}
                >
                    <h2>Our Available Beverages</h2>
                    <BevvyList />
                </Content>
            </Layout>
        </Layout>
    );
}
