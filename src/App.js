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

  exportData = ()=> {
    //export shipment to lacal storage
    const shipment = this.state.shipment;
    
    localStorage.setItem('shipment', JSON.stringify(shipment));
  };

  createCargo = (newCargo)=> {
    //create an object for each cargo with cargo , and render data.
    const shipment = this.state.shipment;
     
    if(shipment.length > 0) {
      shipment.forEach(cargo => {
        if(cargo.useIdNumber === newCargo.useIdNumber){
          this.setState({isDouble: true});
          return ;
        }else {
          shipment.push(newCargo);
        }
      });
    }else {
      shipment.push(newCargo);
    };

    this.setState({
      shipment
    }, this.exportData());
      
  };

  handleDoubleCargoMsg = ()=> {
    //turn off double cargo id msg
    this.setState({isDouble: false});
  };

  sendShipment = ()=> {

  };

  componentDidMount () {
    //import shipment data on load
    this.setState({shipment: this.importData()})
  };

  componentDidUpdate () {
    console.log('component did update')
    console.log(this.state.shipment)
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
