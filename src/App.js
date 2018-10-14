import React, { Component } from 'react';

import './App.css';
import Desayuno from './ComponentDesayuno/desayuno'
// import * as firebase from 'firebase';
// import {db_config} from './config/config.js';

class App extends Component {
constructor(props){
  super(props);
    this.state = {
      name: '',
      status: true
    }
}

  render() {
    if(this.state.status){
       return (
       <div>
        <form onSubmit={this.handleSubmit.bind(this)}>         
          <input type="text" onChange={this.handleName.bind(this)}/>
          <button type="submit" >Ingresar</button>
        </form>
      </div>
    )
    } else{
      return(
       
      <div >
          <Desayuno/>
          {this.state.name}   
      </div>
      )      
    }
  }

handleSubmit(event){
  event.preventDefault(event)
    if(this.state.status){
      this.setState({status:false})
    }  
}

handleName(event){
  this.setState({name: event.target.value})
}


}
export default App;

