
import React, {useState, useEffect} from 'react';

import CardSelect from './CardSelect';
import Button from './Button';

const AddItemInput = props => {

  //handle cargo id number
  const [useIdNumber, setIdNumber] = useState("");
  const handleSetIdNumber = e => setIdNumber(
    e.target.value < 0 ? 0 : e.target.value
    );

  //handle cargo length
  const [useLength, setLength] = useState("");
  const handleSetLength = e => setLength(
    e.target.value < 0 ? 0 : e.target.value
    );

  //handle cargo width;
  const [useWidth, setWidth] = useState("");
  const handleSetWidth = e => setWidth(
    e.target.value < 0 ? 0 : e.target.value
  );

  //handle waight
  const [useWeight, setWeight] = useState("");
  const handleSetWeight = e => setWeight(
    e.target.value < 0 ? 0 : e.target.value
  );

  //handle errors
  const [useErrorIdNumber, setErrorIdNumber] = useState(false);
  const [useErrorLength, setErrorLength] = useState(false);
  const [useErrorWidth, setErrorWidth] = useState(false);
  const [useErrorWeight, setErrorWeight] = useState(false);

  const formReset = value => {
    setIdNumber(value);
    setLength(value);
    setWidth(value);
    setWeight(value);
  };

  

    return (
        <form 
          className="addItemInput"
          
          >
          <CardSelect />
        </form>
    );
};

export default AddItemInput;