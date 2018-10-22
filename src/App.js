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
      status: true,
      total: 0,
      lista:[],
      listDesayuno: []
    }
    this.countTotal=this.countTotal.bind(this);
    this.countTot=this.countTot.bind(this);
    this.deleteDesayuno=this.deleteDesayuno.bind(this);
    this.delete=this.delete.bind(this)
}

countTotal(precio,item){
  const {lista} = this.state;
  lista.push({
    item: item,
    precio: precio
  })
  this.setState({lista:lista,total: this.state.total+parseInt(precio)})
}

countTot(precio,item){
  const {listDesayuno} = this.state;
  listDesayuno.push({
    item: item,
    precio: precio
  })
  this.setState({listDesayuno:listDesayuno,total: this.state.total+parseInt(precio)})
}



deleteDesayuno(id,precio){
  const {listDesayuno}=this.state;
      if(id == id){
        listDesayuno.splice(id, 1);
     }
  this.setState({listDesayuno:listDesayuno, total:this.state.total - parseInt(precio)})
  }


delete(id,precio){
  const {lista}=this.state;
      if(id == id){
        lista.splice(id, 1);
     }
  this.setState({lista:lista, total:this.state.total - parseInt(precio)})
}

  render(){
    
    if(this.state.status){
       return (   
         <div className="bodyInit">  
         <Grid>
          <Row className="show-grid one">
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
      <div className="inicio">
         <Grid>
          <Row className="show-grid">
           <Col xs={12} md={6} lg={6}>
           <h1>Burger Queen</h1>
           </Col>       
           <Col xs={12} md={6} lg={6}>
           <Button bsStyle="danger" onClick={this.handleCancel.bind(this)}>Cancelar Pedido</Button>
           </Col>
            </Row>
            <Row>
            <Col xs={12} md={2} lg={2}>
           <h4>Cliente:</h4>
           </Col>
           <Col xs={12} md={2} lg={2}>
           <h5>{this.state.name}</h5>
           </Col>
            </Row>
            <Row className="show-grid">
            <Col xs={12} md={7} lg={6}>
            <Desayuno
            countTot={this.countTot}
            deleteDesayuno={this.deleteDesayuno}
            />
              <Menu
             countTotal={this.countTotal}
             deleteMenu={this.deleteMenu}
             />
            </Col>
            <Col xs={12} md={6} lg={6}>
            {this.state.lista.map((data,key)=>{
            return(
              <div>
                {data.item}{data.precio}<i className="fas fa-trash" onClick={()=>this.delete(key,data.precio)}></i>
              </div>
            )
            })}

             {this.state.listDesayuno.map((data,key)=>{
            return(
              <div>       
                <p>{data.item}{data.precio}</p><i className="fas fa-trash" onClick={()=>this.deleteDesayuno(key,data.precio)}></i>
              </div>
            )
            })}         
            <p>Total</p>{this.state.total}
            </Col>
          </Row>
         </Grid>       
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

