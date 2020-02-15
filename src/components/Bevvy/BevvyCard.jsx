import React, { useState } from 'react';
import { Card } from 'antd';
import BevvyTitle from './BevvyTitle';
import BevvyDrawer from './BevvyDrawer';

const cardStyle = {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
};

export default function BevvyCard(props) {
    const [visible, setVisible] = useState(false);
    return (
        <Card
            hoverable
            style={cardStyle}
            cover={
                <img
                    alt={props.itemName ? props.itemName : 'Cocoa Image'}
                    src={props.imgURL}
                    style={{ height: 250, objectFit: 'cover' }}
                />
            }
        >
            <BevvyTitle title={props.itemName} />
            <BevvyDrawer {...props} />
        </Card>
    );
}
