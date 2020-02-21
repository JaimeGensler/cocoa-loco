import React from 'react';
import SectionTitle from '../SectionTitle.jsx';
import BevvyCard from './BevvyCard';

const gridDisplay = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '2rem',
};
export default function BevvyList(props) {
    return (
        <div>
            <SectionTitle title="Our Available Bevvies" />
            <div style={gridDisplay}>
                {props.bevvies.map((bevvy, i) => {
                    console.log(bevvy);
                    return <BevvyCard {...bevvy} key={i} />;
                })}
            </div>
        </div>
    );
}
