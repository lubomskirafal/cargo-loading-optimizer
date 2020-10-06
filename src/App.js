import React, { PureComponent } from 'react';
import getSurfaceArea from './components/getSurfaceArea';
import permutations from './components/permutations';
import './App.scss';

import DoubleCargoMsg from './components/DoubleCargoMsg';
import AddItemInput from './components/AddItemInput';
import Button from './components/Button';
import ShipmentList from './components/ShipmentList';

class App extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      shipment: [],
      isDouble: false,
      freightCarWidth: 2.8,
      freightCarLength: 12.7,
      freightCarArea: 0, //m2
      freightCarNumber: 0,
      freightCars: [],
    };
  };

  importData = ()=> {
    //import shipment to lacal storage
    const shipment = localStorage.getItem('shipment') ? JSON.parse(localStorage.getItem('shipment')) : [];
    
    return shipment;
  };

  exportData = (shipment)=> {
    //export shipment to lacal storage
    
    localStorage.setItem('shipment', JSON.stringify(shipment));
  };

  createCargo = (newCargo)=> {
    //create an object for each cargo with cargo , and render data.
    
    const newShipment = this.state.shipment;
     
    if(newShipment.length > 0) {

          newShipment.forEach(cargo => {

            if(cargo.useIdNumber === newCargo.useIdNumber) return this.setState({isDouble: true});

              });

            newShipment.push(newCargo);
        }else {

          newShipment.push(newCargo);
          
        };

        this.exportData(newShipment);
        
        this.setState({shipment: this.importData()});
      
  };

  handleDoubleCargoMsg = ()=> {
    //turn off double cargo id msg
    this.setState({isDouble: false});
  };

  deleteCargo = (id)=> {
    const shipment = this.state.shipment;

    shipment.forEach(cargo => {

      if(cargo.useIdNumber === id) {

        const index = shipment.indexOf(cargo);
        shipment.splice(index,1);

      };

    });

    this.exportData(shipment);
        
    this.setState({shipment: this.importData()});

  };

  sendShipment = ()=> {
    
    const shipment = this.state.shipment;
    // let freightCarArea = getSurfaceArea(this.state.freightCarLength, this.state.freightCarWidth);
    // let newFreightCars = this.state.freightCars;
    // let freightCarNumber = this.state.freightCarNumber;
    // let cargoTotalArea = 0;
    

    // shipment.forEach(cargo=> cargoTotalArea += cargo.surfaceArea );
    
    // freightCarNumber = Math.ceil(cargoTotalArea / freightCarArea);
    
    

    console.log(permutations(shipment));
    
  };
  

  componentDidMount () {
    //import shipment data on load
    
    this.setState({shipment: this.importData()});
  };

  componentDidUpdate () {
    
  };
  

  render () {

    const {createCargo, deleteCargo} = this;
    const {isDouble} = this.state;
    return (
      <div className="App">
  
        <div className="addItemInput__wrapper">
          <AddItemInput handleSubmit={createCargo}/>  
          <Button 
            cssStyle={"sendShipment"}
            text="Wyślij transport"
            handleClick={this.sendShipment}
            />
        </div>
        {isDouble&&<DoubleCargoMsg handleClick={this.handleDoubleCargoMsg}/>}

        <ShipmentList   
          shipment={this.state.shipment}
          deleteCargo={deleteCargo}
          />
      </div>
    );
  };
}

export default App;
