import React from 'react';

const Button = props => {

    const { text, handleClick, cssStyle } = props;

    return (
        <button 
            onClick={handleClick}
            className={cssStyle}
        >
        {text}
        </button>
    );
};

export default Button;