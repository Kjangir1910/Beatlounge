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

const Headphone = () => {
    return(<>
    <div style={{ width: '100%' }} className="products">
        <Container fluid style={{padding:'0px'}} className="products-container">
        <Row className="product-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>
            <Row className='headphone'>
            <h2>Headphones</h2>
                    <Col>
                    <img className='headphone-a' src='\Image\Icons\specsImage.png' alt='Beats3'/>
                    <h1>Beats 3</h1>
                    <p>Price: $199 (75% off)</p>
                    </Col>
                    <Col>
                    <img src='\Image\photos\Headphone2.jpg' alt='Beats5' height='320px' width='320px'/>
                    <h1>Beats 5</h1>
                    <p>Price: $245 (60% off)</p>
                    </Col>
                    <Col>
                    <img src='\Image\photos\Headphone3.jpg' alt='Beats4' height='320px' width='320px'/>
                    <h1>Beats 4</h1>
                    <p>Price: $175 (80% off)</p>
  </Col>
            </Row>

            </Container>
        </div>
    </>)
}

export default Headphone