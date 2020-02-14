import React from 'react';
import Portrait from './Portrait';
import Expander from './Expander';
import BevvyList from './BevvyList';

function App() {
    return (
        <div>
            <h1>What up</h1>
            <Portrait
                itemName="Hot Chocolate"
                imgURL="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.travelandleisure.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F1600x1000%2Fpublic%2F1544042819%2Ffour-seasons-vail-colorado-HOTCOCO1218.jpg%3Fitok%3D2dEnNODU&w=400&c=sc&poi=face&q=85"
            />
            <BevvyList />
        </div>
    );
}
// <Expander />

export default App;
