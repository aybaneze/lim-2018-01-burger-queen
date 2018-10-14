import React, {Component} from 'react';

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
                <button>Seleccionar</button>
            </div>
        )
    }
}

export default CartaDesayuno;