import React, {Component} from 'react';
import CartaMenu from '../componentCartaMenu/cartaMenu'
import TotalMenu from '../list/total';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            menu:[],
            status: false
        }

        this.total= props.total;
    }

    componentDidMount(){
        const {menu} = this.state;
        fetch('https://raw.githubusercontent.com/aybaneze/lim-2018-01-burger-queen/master/src/menu.json')
          .then(response=>response.json())
            .then(data=>{
              for(let value in data){
                menu.push({
                id: data[value].id,
                item: data[value].item,
                precio: data[value].precio,
                tamaño: data[value].tamaño
              })  
              } 
              this.setState({menu})  
            })
            console.log(this.state.menu)
    }

    handleMenu(){
        this.setState({status:true})
    }

    handleSalir(){
      this.setState({status:false})
    }

    render(){
        if(this.state.status){
            return(
                <div>
                    {this.state.menu.map((data,key)=>{
                        return(
                            <CartaMenu
                                key={key}
                                id={data.id}
                                item= {data.item}
                                precio={data.precio}   
                                tamaño={data.tamaño} 
                            />
                        )
                    })}
                    <h1>Total</h1>
                    {/* <TotalMenu/> */}
                    <button onClick={this.handleSalir.bind(this)}>Salir</button>
                </div>
            )
        }else{
            return(
                <div>
                    <button onClick={this.handleMenu.bind(this)}>Menu</button>
                </div>
                  )
        }
    }

}

export default Menu;