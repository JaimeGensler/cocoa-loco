import React from 'react';
import { Typography } from 'antd';

const titleStyles = {
    fontFamily: 'Josefin Sans, sans-serif',
    textAlign: 'center',
};
export default function SectionTitle(props) {
    return (
        <Typography.Title level={2} style={titleStyles}>
            {props.title}
        </Typography.Title>
    );
}
