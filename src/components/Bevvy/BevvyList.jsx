import React from 'react';
import { Typography } from 'antd';
import BevvyCard from './BevvyCard';
import cocoaData from '../../cocoaData';

const gridDisplay = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '2rem',
};
export default function BevvyList() {
    return (
        <div>
            <Typography.Title
                level={2}
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
                Our Available Bevvies
            </Typography.Title>
            <div style={gridDisplay}>
                {cocoaData.map((bevvy, i) => {
                    return (
                        <BevvyCard
                            itemName={bevvy.itemName}
                            imgURL={bevvy.imgURL}
                            description={bevvy.description}
                            key={i}
                        />
                    );
                })}
            </div>
        </div>
    );
}
