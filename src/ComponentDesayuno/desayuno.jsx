import React, {Component} from 'react';
import CartaDesayuno from '../componentCartaDesayuno/cartaDesayuno'

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
          item: data[value].item,
          precio: data[value].precio
        })  
        } 
        this.setState({desayuno})  
      })
      console.log(this.state.desayuno)
}

handleDesayuno(){
    this.setState({status:true})
}

    render(){
        console.log(this.state.desayuno)
        if(this.state.status){
             return(
                 <div>
                    {this.state.desayuno.map(data=>{
                        return(
                            <CartaDesayuno
                            item= {data.item}
                            precio = {data.precio}
                            />
                        )
                    })}                    
                 </div>
                    )  
        }else{
            return(
                 <div>
                     <button onClick={this.handleDesayuno.bind(this)}>Desa</button>
                     
                 </div>
                    )  
        }
    
}
}

export default Desayuno;