import React from 'react';
import Portrait from './Portrait';
import cocoaData from '../cocoaData';

export default function BevvyList() {
    return (
        <div>
            {cocoaData.map(bevvy => {
                return (
                    <Portrait itemName={bevvy.itemName} imgURL={bevvy.imgURL} />
                );
            })}
        </div>
    );
}
