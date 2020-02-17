import React from 'react';
import { Typography, Icon } from 'antd';
import { Link } from 'react-router-dom';

const titleStyle = {
    fontSize: '2rem',
    color: 'white',
    fontFamily: 'Julius Sans One, sans-serif',
    margin: '0 0 0 0.5rem',
    lineHeight: '2rem',
};
const headerStyle = {
    float: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    marginLeft: -32,
};
const navStyle = {
    float: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '100%',
    fontSize: '1rem',
    listStyleType: 'none',
    width: '40%',
    margin: '0',
    padding: '0',
};
const linkStyle = {
    color: 'white',
};
export default function SiteHead() {
    return (
        <div style={{ height: '100%' }}>
            <div style={headerStyle}>
                <Icon
                    type="coffee"
                    style={{ color: 'white', fontSize: '2rem' }}
                />
                <Typography.Title level={1} style={titleStyle}>
                    Cocoa Loco
                </Typography.Title>
            </div>
            <ul style={navStyle}>
                <li>
                    <Link to="/white" style={linkStyle}>
                        White
                    </Link>
                </li>
                <li>
                    <Link to="/milk" style={linkStyle}>
                        Milk
                    </Link>
                </li>
                <li>
                    <Link to="/dark" style={linkStyle}>
                        Dark
                    </Link>
                </li>
            </ul>
        </div>
    );
}
