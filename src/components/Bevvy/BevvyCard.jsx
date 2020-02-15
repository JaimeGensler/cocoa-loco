import React, { useState } from 'react';
import { Card, Typography, Button, Icon, Drawer } from 'antd';

export default function BevvyCard(props) {
    const [visible, setVisible] = useState(false);
    return (
        <Card
            hoverable
            style={{
                height: '100%',
                width: '100%',
                overflow: 'hidden',
                textAlign: 'center',
            }}
            cover={
                <img
                    alt={props.itemName ? props.itemName : 'Cocoa Image'}
                    src={props.imgURL}
                    style={{ height: 250, objectFit: 'cover' }}
                />
            }
        >
            <Typography.Title
                level={3}
                style={{ fontFamily: 'Dosis, sans-serif' }}
            >
                {props.itemName}
            </Typography.Title>
            <div style={{ margin: '0 auto', width: 'auto' }}>
                <Button
                    onClick={() => {
                        setVisible(true);
                    }}
                    icon="up"
                >
                    More Info
                </Button>
            </div>
            <Drawer
                title={props.itemName}
                placement="bottom"
                visible={visible}
                getContainer={false}
                onClose={() => {
                    setVisible(false);
                }}
                style={{ position: 'absolute' }}
            >
                <p>{props.description}</p>
                {console.log(props.description)}
            </Drawer>
        </Card>
    );
}

// <Drawer
//     title="Basic Drawer"
//     placement="right"
//     closable={false}
//     onClose={this.onClose}
//     visible={this.state.visible}
//     getContainer={false}
//     style={{ position: 'absolute' }}
// >
//     <p>Some contents...</p>
// </Drawer>;
