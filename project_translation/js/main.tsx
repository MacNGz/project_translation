import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';

ReactDOM.render(
    <Content 
        caption="For testing: 一念永恒"
        url="/api/v1/" 
    />,
    document.getElementById('reactEntry'),
);
