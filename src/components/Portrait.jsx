import React from 'react';

export default function Portrait(props) {
    return (
        <div>
            <div>
                <img src={props.imgURL} />
            </div>
            <div></div>
        </div>
    );
}
