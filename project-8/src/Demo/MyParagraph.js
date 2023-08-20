import React from 'react'

export default function MyParagraph({ children }) {
    console.log('my paragraph running');
    return <p>{children}</p>;
};
