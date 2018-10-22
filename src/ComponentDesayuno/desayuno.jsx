import React, {Component} from 'react';
import CartaDesayuno from '../componentCartaDesayuno/cartaDesayuno'
import {Button} from 'react-bootstrap';

class Desayuno extends Component{ 
constructor(props){
    super(props);
    this.state={
        desayuno: [],
        listDesayuno: [],
        total: 0,
        status: false
    }   
    this.countDesayuno=this.countDesayuno.bind(this)
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


countDesayuno(id,item,precio){
 const {listDesayuno} = this.state;
 listDesayuno.push({
     id: id,
     item: item,
     precio: precio,
 })
 this.setState({listDesayuno: listDesayuno, total: this.state.total + parseInt(precio)})
 this.props.countTot(precio,item);
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
                            id={data.id}
                            key={key}
                            item= {data.item}
                            precio = {data.precio}
                            countDesayuno = {this.countDesayuno}
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