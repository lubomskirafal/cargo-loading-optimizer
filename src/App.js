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
    const cars = [];//final array contains all cars with loading setup
    const shipment = this.state.shipment;//shipment list
    //calc surface area of freight car
    const freightCarArea = getSurfaceArea(this.state.freightCarLength, this.state.freightCarWidth);
    let cargoTotalArea = 0;
    //get total cargo surface 
    shipment.forEach(cargo=> cargoTotalArea += cargo.surfaceArea );
    //determ required number of cars
    const newFreightCarNumber = Math.ceil(cargoTotalArea / freightCarArea);
    
    for(let i = 0; i< newFreightCarNumber; i++) {
      // loop for each cargo car
      
      const shipments = permutations(shipment);
      const newShipments = [];//contain all permutations loading simulations per car
      let newShipment = [];//contain loading simulation for each permutation

      shipments.forEach(shipment => {
      //loop for each cargo permutation to simulate car loading
        let carArea = freightCarArea;
        newShipment = [];

        shipment.forEach(cargo => {
            //check hav many items can be loaded to car for each permutation
          if(cargo.surfaceArea <= carArea) {
            //load items to the car until total surface area is <= car surface area
            carArea -= cargo.surfaceArea;
            newShipment.push(cargo);

          };
          
        });
       //return arr of simulated loaded cargo for each permutation, and push to general array
        newShipments.push(newShipment);
      });
    
      newShipments.sort((shipmantA, shipmantB)=> {
        //determ which loading simulation is most efficient
        let areaA = 0;
        shipmantA.forEach(cargo => areaA += cargo.surfaceArea);

        let areaB = 0;
        shipmantB.forEach(cargo => areaB += cargo.surfaceArea);

        return areaB - areaA;
      });

      //get the most efficiant loading setup
      const loadedCargo = newShipments[0];

      shipment.forEach(cargo => {
        //identify loaded items in main list and delete
        loadedCargo.forEach(item=>{
          
          if(cargo.useIdNumber === item.useIdNumber) {

            const index = shipment.indexOf(cargo);
            shipment.splice(index,1);

          };

        });

      });

      console.log(loadedCargo)
      //push final loading setup per car to general list
      cars.push(loadedCargo);
    };
    //final loading setup
    this.setState({freightCars: cars});
    
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
