import React from 'react';
import { Typography } from 'antd';
import BevvyCard from './BevvyCard';

const gridDisplay = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '2rem',
};
export default function BevvyList(props) {
    return (
        <div>
            <Typography.Title
                level={2}
                style={{ fontFamily: 'Josefin Sans, sans-serif' }}
            >
                Our Available Bevvies
            </Typography.Title>
            <div style={gridDisplay}>
                {props.bevvies.map((bevvy, i) => {
                    return <BevvyCard {...bevvy} key={i} />;
                })}
            </div>
        </div>
    );
}
