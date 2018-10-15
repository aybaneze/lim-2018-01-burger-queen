import React, {Component} from 'react';
import List from '../list/List'


class CartaMenu extends Component{
    constructor(props){
        super(props); 
        this.item= props.item;
        this.precio= props.precio;
        this.tamaño= props.tamaño;
        this.id= props.id;
        this.state={
            count:[]
        }
        this.handleCount.bind(this)
        this.delete=this.delete.bind(this)
    }
    
 

    handleCount(id,item,precio){ 
        const {count} = this.state;
        console.log()
        count.push({
            id:id,
            item: item,
            precio: precio,
            total:(count.length+1)*precio
        })
       this.setState({count})
       console.log(count)
    }
  

    delete(id){
        const {count}=this.state;
           count.pop()
            this.setState({count})
           }
            


    render(){
        console.log(this.state.count)
            return(
                <div>
                    {this.item}
                    {this.precio}
                    {this.tamaño}
                    <button onClick={()=>{this.handleCount(this.id,this.item,this.precio)}}>Seleccionar</button>
                     {this.state.count.map((data,key)=>{
                             return(
                                <List
                                    key={key}      
                                    id={data.id}  
                                    item={data.item}
                                    precio={data.precio}
                                    delete={this.delete}
                                    total={data.total}                                  
                                />
                              
                                )
                               
                           }
                )}
                
                </div>
                 
            )
    }
}

export default CartaMenu;