import React from 'react';
import { Link } from 'react-router-dom';
import BevvyCard from './Bevvy/BevvyCard.jsx';

export default function Home(props) {
    return (
        <div>
            <div>
                <h2 style={{ textAlign: 'center' }}>Our drink of the day:</h2>
                <div style={{ width: '30%', margin: '0 auto' }}>
                    <BevvyCard {...props.daily} />
                </div>
            </div>
        </div>
    );
}
