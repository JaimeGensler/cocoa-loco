import React from 'react';
import { Typography } from 'antd';

export default function BevvyTitle(props) {
    return (
        <Typography.Title level={3} style={{ fontFamily: 'Dosis, sans-serif' }}>
            {props.title}
        </Typography.Title>
    );
}
