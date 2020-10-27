import React, { PureComponent } from 'react';

import permutations from './components/permutations';
import './App.scss';


import AddItemInput from './components/AddItemInput';



class App extends PureComponent {
  constructor (props) {
    super(props);

    this.state = {
      
    };
  };

  

  render () {
    return (
      <div className="App">
  
        <div className="addItemInput__wrapper">

          <AddItemInput />  
        
        </div>
        
        
      </div>
    );
  };
}

export default App;
