import React from 'react';
import Portrait from './Portrait';
import cocoaData from '../cocoaData';

const gridDisplay = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '2rem',
};
export default function BevvyList() {
    return (
        <div style={gridDisplay}>
            {cocoaData.map(bevvy => {
                return (
                    <Portrait itemName={bevvy.itemName} imgURL={bevvy.imgURL} />
                );
            })}
        </div>
    );
}
