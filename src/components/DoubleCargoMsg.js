import React from 'react';
import Button from './Button';

const DoubleCargoMsg = (props)=> {


    return (
        <div className="doubleCargoMsg">
            <p>Cargo o tym numerze już istnieje</p>
            <Button
                text="Ok"
                cssStyle="closeDoubleMsgModal"
                handleClick={props.handleClick}
                />
        </div>
    );
};

export default DoubleCargoMsg;