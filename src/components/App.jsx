import React from 'react';

import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import cocoaData from '../cocoaData';
import BevvyList from './Bevvy/BevvyList';
import SiteHead from './SiteHead.jsx';
import Home from './Home.jsx';

const { Header, Content, Sider } = Layout;

export default function App() {
    return (
        <Layout>
            <Header>
                <SiteHead />
            </Header>
            <Content style={{ backgroundColor: '#f0f0f0', padding: '2rem' }}>
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
                            <BevvyList {...props} bevvies={cocoaData.white} />
                        )}
                    />
                    <Route
                        path="/milk"
                        render={props => (
                            <BevvyList {...props} bevvies={cocoaData.milk} />
                        )}
                    />
                    <Route
                        path="/dark"
                        render={props => (
                            <BevvyList {...props} bevvies={cocoaData.dark} />
                        )}
                    />
                </Switch>
            </Content>
        </Layout>
    );
}
