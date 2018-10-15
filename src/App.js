import React, { Component } from 'react';
import {Grid, Row, Col,Form, FormControl} from 'react-bootstrap'
import './App.css';
import Desayuno from './ComponentDesayuno/desayuno'
import Menu from './componentMenu/menu'
import {Button} from 'react-bootstrap';
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

  render(){
    if(this.state.status){
       return (
       <div className="body">
         <Grid>
          <Row className="show-grid">
           <Col xs={12} md={12} lg={12}>
           <h1>Burger Queen</h1>
           <Form onSubmit={this.handleSubmit.bind(this)}>
           <FormControl
            type="text"
            onChange={this.handleName.bind(this)}
            placeholder="Enter text" 
            />
             <Button type="submit" bsStyle="success">Ingresar</Button>
            </Form>
            </Col>
          </Row>
         </Grid>
      </div>
    )
    } else{
      return(     
      <div>
         <h3>Pedido de:{this.state.name}</h3>
          <Desayuno/>
          <Menu/>
          <Button bsStyle="danger" onClick={this.handleCancel.bind(this)}>Cancelar Pedido</Button>
          
             
      </div>
      )      
    }
  }

handleSubmit(event){
  event.preventDefault(event)
  if(this.state.name.trim() != ''){
    if(this.state.status){
      this.setState({status:false})
    }}else{
      alert('Debe ingresar un usuario')
    }
}

handleName(event){
  this.setState({name: event.target.value})
}

handleCancel(){
  this.setState({status:true})
}

}
export default App;

