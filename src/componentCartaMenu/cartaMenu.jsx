import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
// import List from '../list/List'


class CartaMenu extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
        this.precio = props.precio;
        this.tamaño = props.tamaño;
        this.id = props.id;
        this.handleCount = this.handleCount.bind(this)
    }



    handleCount(id, item, precio) {
        console.log(id, item, precio)
        this.props.count(id, item, precio)
    }




    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={12} md={6} lg={6}>
                            {this.item}<br/>
                            {this.tamaño}
                        </Col>
                        <Col xs={12} md={4} lg={6}>
                            s/.  {this.precio}
                        </Col>
                        <Col xs={12} md={2} lg={6}>
                            <i className="fas fa-plus-square" onClick={() => { this.handleCount(this.id, this.item, this.precio) }}></i>
                        </Col>
                    </Row>
                </Grid>
            </div>

        )
    }
}

export default CartaMenu;