import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';

import SiteHead from './SiteHead.jsx';
import Home from './Home.jsx';
import NewBevvyForm from './Bevvy/NewBevvyForm';
import BevvyList from './Bevvy/BevvyList';
import cocoaData from '../cocoaData';

const { Header, Content, Sider } = Layout;

export default class App extends React.Component {
    state = {
        allBevvies: cocoaData,
    };

    handleNewBevvy = newBevvy => {
        this.setState({ allBevvies: [...this.state.allBevvies, newBevvy] });
    };

    render() {
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
                            <Home {...props} daily={cocoaData[5]} />
                        )}
                    />
                    <Route
                        path="/new_bevvy"
                        render={props => (
                            <NewBevvyForm
                                {...props}
                                onNewBevvySubmission={this.handleNewBevvy}
                            />
                        )}
                    />
                    <Route
                        path="/white"
                        render={props => (
                            <BevvyList
                                {...props}
                                bevvies={this.state.allBevvies.map(bev => {
                                    if (bev.cocoaContent < 40) return bev;
                                })}
                            />
                        )}
                    />
                    <Route
                        path="/milk"
                        render={props => (
                            <BevvyList
                                {...props}
                                bevvies={this.state.allBevvies.map(bev => {
                                    if (
                                        bev.cocoaContent <= 70 &&
                                        bev.cocoaContent >= 40
                                    )
                                        return bev;
                                })}
                            />
                        )}
                    />
                    <Route
                        path="/dark"
                        render={props => (
                            <BevvyList
                                {...props}
                                bevvies={this.state.allBevvies.map(bev => {
                                    if (bev.cocoaContent >= 70) return bev;
                                })}
                            />
                        )}
                    />
                </Switch>
            </Content>
        </Layout>;
    }
}
