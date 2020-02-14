import React from 'react';
import { Card, Collapse } from 'antd';
const { Meta } = Card;
const { Panel } = Collapse;

export default function Portrait(props) {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={
                <img
                    alt={props.itemName ? props.itemName : 'Cocoa Image'}
                    src={props.imgURL}
                />
            }
        >
            <Meta title={props.itemName} />
            <Collapse
                bordered={false}
                expandIconPosition={'left'}
                style={{ width: 50 }}
            >
                <Panel key="1">Ayy lm freaking ao</Panel>
            </Collapse>
        </Card>
    );
}
