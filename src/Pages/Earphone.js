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


const Earphone = () => {
    return(<>
    <div style={{ width: '100%' }} className="products">
        <Container fluid style={{padding:'0px'}} className="products-container">
        <Row className="product-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>
            <Row className='Earphone'>
            <h2>Earphones</h2>
                <Col>
                <img src='\Image\photos\Earphone1.jpg' alt='Boat earphone s14' height='320px' width='320px'/>
                <h1>Boat earphone S14</h1>
                <p>Price: $35(45% off)</p>
                </Col>
                <Col>
                <img src='\Image\photos\Earphone2.jpg' alt='Boat earphone e85' height='320px' width='320px'/>
                <h1>Boat earphone E85</h1>
                <p>Price: $29(45% off)</p>
                </Col>
                <Col>
                <img src='\Image\photos\Earphone3.jpg' alt='Boat earphone s18' height='320px' width='320px'/>
                <h1>Boat earphone S18</h1>
                <p>Price: $43(45% off)</p>
                </Col>
            </Row>
            </Container>
        </div>
    </>)
}

export default Earphone