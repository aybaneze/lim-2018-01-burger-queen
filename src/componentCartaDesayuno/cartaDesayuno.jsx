import React, {Component} from 'react';
import {Grid, Row, Col,Form, FormControl} from 'react-bootstrap'

class CartaDesayuno extends Component{
    constructor(props){
      super(props);
      this.item = props.item;
      this.precio= props.precio;  
    }
    
    render(){
        return(
            <div>
                {this.item}
                {this.precio}
                <i className="fas fa-plus-square"></i>
                <h3>Total</h3> 
            </div>
        )
    }
}

export default CartaDesayuno;