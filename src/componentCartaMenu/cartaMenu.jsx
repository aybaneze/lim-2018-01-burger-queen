import React, {Component} from 'react';
import List from '../list/List'

class CartaMenu extends Component{
    constructor(props){
        super(props); 
        console.log(props) 
        this.item= props.item;
        this.precio= props.precio;
        this.tamaño= props.tamaño;
        this.id= props.id;
        this.state={
            count: [

            ]
        }
        this.handleCount.bind(this)
        this.delete=this.delete.bind(this)
    }
    
 

    handleCount(id,item,precio){ 
        const {count} = this.state;
        count.push({
            id:id,
            item: item,
            precio: precio
        })
       this.setState({count})
    }

    delete(id){
        const {count}=this.state;
        for(let i=0; i < count.length; i++){
            console.log(count.length)
            if(count[i].id == count.id){
                console.log(count[i])
              console.log(count.splice(i, 1));          
            }}        
          this.setState({count});
    }

    render(){
            return(
                <div>
                    {this.item}
                    {this.precio}
                    {this.tamaño}
                    <button onClick={()=>{this.handleCount(this.id,this.item,this.precio)}}>Seleccionar</button>
                     {this.state.count.map((data,key)=>{
                    return(
                        <List
                            id={data.id}
                            key={key}
                            item={data.item}
                            precio={data.precio}
                            delete={this.delete}
                        />
                    )
                })}
                </div>
                 
            )
    }
}

export default CartaMenu;