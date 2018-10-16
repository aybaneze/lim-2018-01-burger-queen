import React, {Component} from 'react';
import CartaDesayuno from '../componentCartaDesayuno/cartaDesayuno'
import {Button} from 'react-bootstrap';

class Desayuno extends Component{ 
constructor(props){
    super(props);
    this.state={
        desayuno: [],
        status: false
    }    
}

componentDidMount(){
  const {desayuno} = this.state;
  fetch('https://raw.githubusercontent.com/aybaneze/lim-2018-01-burger-queen/master/src/desayuno.json')
    .then(response=>response.json())
      .then(data=>{
        for(let value in data){
          desayuno.push({
          id: data[value].id,
          item: data[value].item,
          precio: data[value].precio
        })  
        } 
        this.setState({desayuno})  
      })
}

handleDesayuno(){
    this.setState({status:true})
}
handleSalir(){
    this.setState({status:false})
}

    render(){
        if(this.state.status){
             return(
                 <div>
                    {this.state.desayuno.map((data,key)=>{
                        return(
                            <CartaDesayuno
                            key={key}
                            item= {data.item}
                            precio = {data.precio}
                            />
                        )
                    })} 
                    <button onClick={this.handleSalir.bind(this)}>Salir</button>                  
                 </div>
                    )  
        }else{
            return(
                 <div>
                     <Button onClick={this.handleDesayuno.bind(this)} type="submit" bsStyle="success">Desayuno  <i className="fas fa-coffee"></i></Button>                         
                 </div>
                    )  
        }
    
}
}

export default Desayuno;