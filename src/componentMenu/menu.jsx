import React, {Component} from 'react';
import CartaMenu from '../componentCartaMenu/cartaMenu'

class Menu extends Component{
    constructor(){
        super();
        this.state={
            menu:[],
            status: false
        }
    }

    componentDidMount(){
        const {menu} = this.state;
        fetch('https://raw.githubusercontent.com/aybaneze/lim-2018-01-burger-queen/master/src/menu.json')
          .then(response=>response.json())
            .then(data=>{
              for(let value in data){
                  console.log(data[value])
                menu.push({
                item: data[value].item,
                precio: data[value].precio
              })  
              } 
              this.setState({menu})  
            })
            console.log(this.state.menu)

    }

    handleMenu(){
        this.setState({status:true})
    }

    render(){
        if(this.state.status){
            return(
                <div>
                    {this.state.menu.map((data,key)=>{
                        return(
                            <CartaMenu
                                key={key}
                                item= {data.item}
                                precio={data.precio}    
                            />
                        )
                    })}
                  
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