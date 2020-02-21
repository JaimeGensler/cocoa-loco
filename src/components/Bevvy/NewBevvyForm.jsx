import React, { useState } from 'react';
import { v4 as getUUID } from 'uuid';
import { Form, Input, InputNumber, Button } from 'antd';
import SectionTitle from './SectionTitle';
const { TextArea } = Input;

export default function NewBevvyForm(props) {
    const [itemName, setItemName] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [cocoaContent, setCocoaContent] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        const newBevvy = {
            id: getUUID(),
            itemName,
            imgURL,
            description,
            price,
            cocoaContent,
        };
        props.onNewPostSubmission(newBevvy);
        setItemName('');
        setImgURL('');
        setDescription('');
        setPrice('');
        setCocoaContent('');
    }

    return (
        <div
            style={{
                margin: '1rem auto',
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '1rem',
                border: '2px solid gray',
            }}
        >
            <SectionTitle title="Add A New Bevvy!" />
            <Form onSubmit={handleFormSubmit}>
                <Input
                    placeholder="Drink Name"
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}
                />
                <Input
                    placeholder="Image URL"
                    value={imgURL}
                    onChange={e => setImgURL(e.target.value)}
                />
                <TextArea
                    placeholder="Drink Description"
                    rows={3}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <InputNumber
                    placeholder="Price"
                    step={0.25}
                    value={price}
                    onChange={e => setPrice(e)}
                />
                <InputNumber
                    placeholder="% content"
                    step={1}
                    value={cocoaContent}
                    onChange={e => setCocoaContent(e)}
                />
                <Button icon="coffee" size="large" htmlType="submit">
                    Add This Bevvy to the List!
                </Button>
            </Form>
        </div>
    );
}
