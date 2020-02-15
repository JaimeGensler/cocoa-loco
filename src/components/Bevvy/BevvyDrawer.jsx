import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import BevvyTitle from './BevvyTitle';

export default function BevvyDrawer(props) {
    const [visible, setVisible] = useState(false);
    return (
        <div>
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
                getContainer={false}
                onClose={() => {
                    setVisible(false);
                }}
                style={{ position: 'absolute' }}
            >
                <p>{props.description}</p>
                {console.log(props.description)}
            </Drawer>
        </div>
    );
}
