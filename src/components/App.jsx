import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import cocoaData from '../cocoaData';
import BevvyController from './BevvyController';
import SiteHead from './SiteHead.jsx';
import Home from './Home.jsx';

const { Header, Content, Sider } = Layout;

export default function App() {
    return (
        <Layout>
            <Header>
                <SiteHead />
            </Header>
            <Content
                style={{
                    backgroundColor: '#f0f0f0',
                    padding: '2rem',
                    minHeight: 'calc(100vh - 64px)',
                }}
            >
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => (
                            <Home {...props} daily={cocoaData.dark[1]} />
                        )}
                    />
                    <Route
                        path="/white"
                        render={props => (
                            <BevvyController {...props} bevvies="white" />
                        )}
                    />
                    <Route
                        path="/milk"
                        render={props => (
                            <BevvyController {...props} bevvies="milk" />
                        )}
                    />
                    <Route
                        path="/dark"
                        render={props => (
                            <BevvyController {...props} bevvies="dark" />
                        )}
                    />
                </Switch>
            </Content>
        </Layout>
    );
}
