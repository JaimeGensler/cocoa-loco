import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

export default function Portrait(props) {
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
            <Meta title={props.itemName} />
            <h1>Does this look okay?</h1>
        </Card>
    );
}
