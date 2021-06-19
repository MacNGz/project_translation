import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';

ReactDOM.render(
    <Content 
        caption=""
        url="/api/v1/" 
    />,
    document.getElementById('reactEntry'),
);
