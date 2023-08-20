import React from 'react';
import MyParagraph from './MyParagraph';

function DemoOutput({ show }) {
    console.log('DEMO OUTPUT');
    return <MyParagraph>{show ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);
