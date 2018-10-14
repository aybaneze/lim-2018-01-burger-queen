import React, {Component} from 'react';


class CartaMenu extends Component{
    constructor(props){
        super(props);
        this.item= props.item;
        this.precio= props.precio;
        this.tamaño= props.tamaño;
    }

    // handleMenu(){
    //     this.setState({status:true})
    // }

    render(){
            return(
                <div>
                    {this.item}
                    {this.precio}
                    {this.tamaño}
                    <button>Seleccionar</button>
                </div>
            )
    }

}

export default CartaMenu;