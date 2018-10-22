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
        this.count= this.count.bind(this)
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
        console.log(precio)
        const {list} = this.state;
        list.push({
                    id:id,
                    item: item,
                    precio: precio,
                })
               this.setState({list:list, total:this.state.total+parseInt(precio)})
               this.props.countTotal(precio,item)         
    }

    handleMenu(){
        this.setState({status:true})
    }

    handleSalir(){
      this.setState({status:false})
    }
    
    // delete(id,precio){
    //     const {list}=this.state;
    //         if(id == id){
    //           list.splice(id, 1);
    //        }
    //     this.setState({list:list, total:this.state.total - parseInt(precio)})
        
    //     this.props.deleteMenu(precio)
    // }

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
                    <Grid>
                    <Row className="show-grid">
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