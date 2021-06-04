import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';

ReactDOM.render(
    <Content 
        caption="It just takes some time, little girl you're in the middle of the ride"
        url="/api/v1/" 
    />,
    document.getElementById('reactEntry'),
);
