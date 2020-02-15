import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import BevvyTitle from './BevvyTitle';

export default function BevvyDrawer(props) {
    const [visible, setVisible] = useState(false);
    return (
        <div style={{ marginTop: 20 }}>
            <Button
                onClick={() => {
                    setVisible(true);
                }}
                icon="up"
            >
                More Info
            </Button>
            <Drawer
                title={<BevvyTitle title={props.itemName} />}
                placement="bottom"
                visible={visible}
                closable={false}
                getContainer={false}
                onClose={() => {
                    setVisible(false);
                }}
                style={{ position: 'absolute' }}
            >
                <p>{props.description}</p>
                <p>
                    <span style={{ fontStyle: 'italic' }}>
                        {props.cocoaContent}% cacao
                    </span>
                    {' | '}${props.price.toFixed(2)}
                </p>
            </Drawer>
        </div>
    );
}
