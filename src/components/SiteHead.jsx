import React from 'react';
import { Typography, Icon } from 'antd';

export default function SiteHead() {
    return (
        <div
            style={{
                float: 'left',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                marginLeft: -32,
            }}
        >
            <Icon type="coffee" style={{ color: 'white', fontSize: '2rem' }} />
            <Typography.Title
                level={1}
                style={{
                    fontSize: '2rem',
                    color: 'white',
                    fontFamily: 'Julius Sans One, sans-serif',
                    margin: '0 0 0 0.5rem',
                    lineHeight: '2rem',
                }}
            >
                Cocoa Loco
            </Typography.Title>
        </div>
    );
}
