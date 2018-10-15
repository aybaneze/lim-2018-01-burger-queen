import React, {Component} from 'react';
import TotalMenu from './total' 


class List extends Component{
 constructor(props){
    super(props);
    this.id=props.id;
     this.item=props.item;
     this.precio=props.precio;
     this.handleDelete=this.handleDelete.bind(this);
     this.total=props.total;
     this.state={
         list: []
     }
 }

componentDidMount(){
    const {list} = this.state;
    list.push({total:this.total})
    this.setState({list})
}

handleDelete(id){
    this.props.delete(id)
}

 render(){
     console.log(this.state.list)
     return(
         <div>
             {this.item}
             {this.precio}
             <button onClick={()=>{this.handleDelete(this.id)}}>Eliminar</button>
             {this.state.list.map((data,key)=>{
                 return(
                     <TotalMenu
                     key={key}
                     total={data.total}
                     />
                 )
             })}
         </div>
     )
 }



}

export default List;