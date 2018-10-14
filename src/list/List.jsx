import React, {Component} from 'react';

class List extends Component{
 constructor(props){
    super(props);
     this.id = props.id;
     this.item=props.item;
     this.precio=props.precio;
     this.handleDelete=this.handleDelete.bind(this);
 }

handleDelete(id){
    this.props.delete(id)
}

 render(){
     return(
         <div>
             {this.item}
             {this.precio}
             <button onClick={()=>{this.handleDelete(this.id)}}>Eliminar</button>
         </div>
     )
 }



}

export default List;