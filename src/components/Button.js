import React from 'react';

const Button = props => {

    const { text, handleClick, cssStyle, icon } = props;

    return (
        <button 
            onClick={handleClick}
            className={cssStyle}
        >
        <span className={icon}>{text}</span>
        </button>
    );
};

export default Button;