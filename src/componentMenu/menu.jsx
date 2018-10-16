import React, {Component} from 'react';
import CartaMenu from '../componentCartaMenu/cartaMenu'
import {Button} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap'

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            menu:[],
            list:[],
            total:0,
            status: false
        }
        this.total= props.total;
        this.count= this.count.bind(this)
        this.delete=this.delete.bind(this)
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

    count(id,item,precio){
        const {list} = this.state;
        list.push({
                    id:id,
                    item: item,
                    precio: precio,
                })
               this.setState({list:list, total:parseInt(precio)})         
    }

    handleMenu(){
        this.setState({status:true})
    }

    handleSalir(){
      this.setState({status:false})
    }
    
    delete(id,precio){
    console.log(id)
        const {list}=this.state;
        console.log(list)
            if(id == id){
              list.splice(id, 1);
           }
        this.setState({list:list, total: 0})
        }
            

    render(){
        console.log(this.state.total) 
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
                                count ={ this.count}
                            />
                        )
                    })}
                     {this.state.list.map((data,key)=>{
                         key={key}
                        return(
                            
                            <div>                            
                            <ul>
                            <li>{data.item}
                             {data.precio}
                             {data.tamaño}
                             <i className="fas fa-trash" onClick={()=>this.delete(key,data.precio)}></i> 
                            </li>
                            </ul>  
                           </div>
                        )
                    })}
                      
                    <Grid>
                    <Row className="show-grid">
                    <Col xs={12} md={5} lg={6}>
                        <h4>Total</h4> {this.state.total}  
                        </Col>
                        <Col xs={12} md={5} lg={6}>
                        <i className="fas fa-undo-alt" onClick={this.handleSalir.bind(this)}>Salir</i>
                        </Col>
                    </Row>
                    </Grid>    
                    
                </div>
            )
        }else{
            return(
                <div>
                    <Button onClick={this.handleMenu.bind(this)} type="submit" bsStyle="success">Menu  <i className="fas fa-utensils"></i></Button>
                </div>
                  )
        }
    }

}

export default Menu;