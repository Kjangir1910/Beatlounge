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

const Accessories = () => {
    return(<>
    <div style={{ width: '100%' }} className="products">
        <Container fluid style={{padding:'0px'}} className="products-container">
        <Row className="product-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>

            <Row className='accessories-a'>
                <h2>Accessories</h2>
                <Col>
                <img src='\Image\photos\mouse1.avif' alt='gearstick j45' height='320px' width='320px'/>
                <h1>Gearstick J45</h1>
                <p>Price: $19(45% off)</p>
                </Col>
                <Col>
                <img src='\Image\photos\mouse2.avif' alt='gearstick j49' height='320px' width='320px'/>
                <h1>Gearstick J49</h1>
                <p>Price: $19(45% off)</p>
                </Col>

                <Col>
                <img src='\Image\photos\Keyboard1.jpg' alt='microsoft f8' height='320px' width='320px'/>
                <h1>Microsoft F8</h1>
                <p>Price: $23(35% off)</p>
                </Col>
            </Row>
            <Row className='accesories-b'>
                <Col>
                <img src='\Image\photos\Keyboard2.jpg' alt='microsoft f7' height='320px' width='320px'/>
                <h1>Microsoft F7</h1>
                <p>Price: $29(35% off)</p>
                </Col>
                <Col>
                <img src='\Image\photos\speaker1.webp' alt='boat m40' height='320px' width='320px'/>
                <h1>Boat M40</h1>
                <p>Price: $105(49% off)</p>
                </Col>
                <Col>
                <img src='\Image\photos\Spearker2.jpg' alt='saregama-edge' height='320px' width='320px'/>
                <h1>Saregama Edge</h1>
                <p>Price: $75(29% off)</p>
                </Col>
              </Row>

        </Container>
        </div>
    </>)
}

export default Accessories
