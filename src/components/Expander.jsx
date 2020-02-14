import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';

const expanderButton = styled.div``;
export default function Expander() {
    return (
        <div style={{ width: 300, border: '1px solid black' }}>
            <div style={{ width: '2rem', height: '5rem', margin: '0 auto' }}>
                <Icon
                    type="down"
                    style={{ fontSize: '2rem', color: 'black' }}
                />
            </div>
        </div>
    );
}
