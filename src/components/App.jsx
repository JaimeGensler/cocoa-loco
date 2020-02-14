import React from 'react';

import { Layout, Menu, Icon, Typography } from 'antd';
import BevvyList from './Bevvy/BevvyList';
import SiteHead from './SiteHead.jsx';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
    return (
        <Layout>
            <Header>
                <SiteHead />
            </Header>
            <Layout>
                <Sider></Sider>
                <Content
                    style={{ backgroundColor: '#f0f0f0', padding: '2rem' }}
                >
                    <BevvyList />
                </Content>
            </Layout>
        </Layout>
    );
}
