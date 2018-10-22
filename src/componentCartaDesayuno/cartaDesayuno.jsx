import React, {Component} from 'react';
import {Grid, Row, Col,Form, FormControl} from 'react-bootstrap'

class CartaDesayuno extends Component{
    constructor(props){
      super(props);
      this.item = props.item;
      this.precio = props.precio;
      this.id= props.id;
      this.handleCountDesayuno=this.handleCountDesayuno.bind(this);

    }

    handleCountDesayuno(id,item,precio){
        this.props.countDesayuno(id,item,precio)
    }
    
    render(){
        return(
            <div>
                {this.item}
                {this.precio}
                <i onClick={()=>{this.handleCountDesayuno(this.id,this.item,this.precio)}} className="fas fa-plus-square"></i>
            </div>
        )
    }
}

export default CartaDesayuno;