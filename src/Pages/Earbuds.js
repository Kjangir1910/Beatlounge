import {Link ,Outlet} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../Layout.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

const Earbuds = () => {
    return(<>
    <div style={{ width: '100%' }} className="products">
        <Container fluid style={{padding:'0px'}} className="products-container">
        <Row className="product-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>

            <Row className='Earbuds'>
            <Col>
            <h2>Earbuds</h2>
                <img src='\Image\photos\Earbuds1.jpg' alt='Boat earbuds g14' height='320px' width='320px'/>
                <h1>Boat earbuds G14</h1>
                <p>Price: $56(45% off)</p>
                </Col>
                <Col>
                <img src='\Image\photos\Earbuds2.jpg' alt='Boat earbuds g19' height='320px' width='320px'/>
                <h1>Boat earbuds G19</h1>
                <p>Price: $46(45% off)</p>
                </Col>
                <Col>
                <img src='\Image\photos\Earbuds3.jpg' alt='Boat earbuds g22' height='320px' width='320px'/>
                <h1>Boat earbuds G22</h1>
                <p>Price: $32(45% off)</p>
                </Col>
            </Row>
            </Container>
        </div>
    </>)
}

export default Earbuds