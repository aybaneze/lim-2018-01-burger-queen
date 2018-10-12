import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import * as firebase from 'firebase';
// import {db_config} from './config/config.js';

class App extends Component {
constructor(props){
  super(props);
    this.state = {
      name: []
    }
  
}

componentDidMount(){
  const {name} = this.state;
  fetch('../functions/desayuno.json')
    .then(response=>response.json())
      .then(data=>{
        name.push({
          name: data

        })
        console.log(data)
      })
}




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
