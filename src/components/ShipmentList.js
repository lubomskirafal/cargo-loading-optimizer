import React from 'react';
import Button from './Button';

const ShipmentList = (props)=> {

    const {shipment, deleteCargo}  = props;

    const cargo = shipment.map(cargo => {
        const {surfaceArea, useIdNumber, useLength, useWidth} = cargo;
        
        return (
            <li
                key={useIdNumber}
                id={useIdNumber}
                width={useWidth}
                length={useLength}
                area={surfaceArea}
                className="shipmentList__item"
            >
                {useIdNumber}
                <div className="buttons">
                    <Button
                        icon="fas fa-edit"
                        cssStyle="editCargo"
                    />
                    <Button
                        icon="fas fa-times" 
                        cssStyle="deleteCargo"
                        handleClick={()=> deleteCargo(useIdNumber)}
                    />
                </div>
            </li>
        );
    });

    return (
        <div className="shipmentList">
            <ul className="shipmentList__list">
                {cargo}
            </ul>
        </div>
    );
};

export default ShipmentList;