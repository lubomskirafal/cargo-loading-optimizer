import React, { PureComponent } from 'react';
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

  sendShipment = ()=> {

  };
  

  componentDidMount () {
    //import shipment data on load
    
    this.setState({shipment: this.importData()});
  };

  componentDidUpdate () {
    
  };
  

  render () {

    const {createCargo} = this;
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

        <ShipmentList shipment={this.state.shipment}/>
      </div>
    );
  };
}

export default App;
