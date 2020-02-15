import React from 'react';
import { Typography } from 'antd';

const titleStyles = {
    fontFamily: 'Dosis, sans-serif',
    margin: '0 auto',
};
export default function BevvyTitle(props) {
    return (
        <Typography.Title level={3} style={titleStyles}>
            {props.title}
        </Typography.Title>
    );
}
