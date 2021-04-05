import React from 'react';
import './Template.css';

const Template = ({children, todoLength}) => {
    return (
        <div className="template">
            <div className="title">오늘 할일 ({todoLength})</div>
            <div>{children}</div>
        </div>
    );
};

export default Template;