
import React, {useState, useEffect} from 'react';
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

  const getSurfaceArea = (length, width)=> {
    
    const surfaceArea = length * width;

    return surfaceArea;
  };

  const cargo = {
    useIdNumber, 
    useLength, 
    useWidth, 
    useWeight,
    surfaceArea: 0
  }

  const formReset = value => {
    setIdNumber(value);
    setLength(value);
    setWidth(value);
    setWeight(value);
  };

  const isValid = ()=> {
    cargo.useIdNumber === '' ? setErrorIdNumber(true) : setErrorIdNumber(false);
    cargo.useLength === '' ? setErrorLength(true) : setErrorLength(false);
    cargo.useWidth === '' ? setErrorWidth(true) : setErrorWidth(false);
    cargo.useWeight === '' ? setErrorWeight(true) : setErrorWeight(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

      if(
        useErrorIdNumber || 
        useErrorLength ||
        useErrorWidth ||
        useErrorWeight
      ) return;

      cargo.surfaceArea = getSurfaceArea(useLength, useWidth);

      props.handleSubmit(cargo);
      
      formReset('');
    
  };

  useEffect(()=>{
    isValid();
    
  })

    return (
        <form 
          className="addItemInput"
          onSubmit={ e => handleSubmit(e)}
          >

          <p className="addItemInput__title">
            Dodaj Cargo
          </p>

          <label htmlFor="id_number">
            Numer cargo: 
          </label>
          <p
            className={
              useErrorIdNumber ? "addItemInput__error addItemInput__error--active" : "addItemInput__error"
              }
          >
          Wartość wymagana</p>
          <input 
              id="id_number" 
              type="number"
              value={useIdNumber}
              onChange={handleSetIdNumber}
              placeholder="000-000-000"
              />
          
          <label htmlFor="item_length">
            Długość (m):
          </label>
          <p
            className={
              useErrorLength ? "addItemInput__error addItemInput__error--active" : "addItemInput__error"
            }
          >
          Wartość wymagana</p>
          <input 
              id="item_length" 
              type="number"
              value={useLength}
              onChange={handleSetLength}
              placeholder={"0.00 m"}
              />

          <label htmlFor="item_width">
            Szerokość (m):
          </label>
          <p
            className={
              useErrorWidth ? "addItemInput__error addItemInput__error--active" : "addItemInput__error"
            }
          >
          Wartość wymagana</p>
          <input 
              id="item_width" 
              type="number"
              value={useWidth}
              onChange={handleSetWidth}
              placeholder={"0.00 m"}
              />

          <label htmlFor="item_weight">
            Masa (Kg):
          </label>
          <p
            className={
              useErrorWeight ? "addItemInput__error addItemInput__error--active" : "addItemInput__error"
            }
          >
          Wartość wymagana</p>
          <input 
              id="item_weight" 
              type="number"
              value={useWeight}
              onChange={handleSetWeight}
              placeholder={"0 kg"}
              />

          <Button 
            text="Załaduj cargo"
            cssStyle="addCargo"
            />
          
        </form>
    );
};

export default AddItemInput;