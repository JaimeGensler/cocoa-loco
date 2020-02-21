import React from 'react';
import BevvyCard from './Bevvy/BevvyCard';
import SectionTitle from './SectionTitle';
import BevvyForm from './BevvyForm';

export default function Home(props) {
    return (
        <div>
            <div>
                <SectionTitle title="Our drink of the day:" />
                <div style={{ width: '30%', margin: '0 auto' }}>
                    <BevvyCard {...props.daily} />
                </div>
                <BevvyForm />
            </div>
        </div>
    );
}
