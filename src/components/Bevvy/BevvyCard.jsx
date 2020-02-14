import React from 'react';
import { Card, Typography } from 'antd';

export default function BevvyCard(props) {
    return (
        <Card
            hoverable
            style={{ height: '100%', width: '100%' }}
            cover={
                <img
                    alt={props.itemName ? props.itemName : 'Cocoa Image'}
                    src={props.imgURL}
                    style={{
                        height: 250,
                        objectFit: 'cover',
                    }}
                />
            }
        >
            <Typography.Title
                level={3}
                style={{ fontFamily: 'Dosis, sans-serif' }}
            >
                {props.itemName}
            </Typography.Title>
            <Drawer></Drawer>
        </Card>
    );
}
