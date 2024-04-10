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


const Productpage2 = () => {
 
    return(<>
      <div style={{ width: '100%' }} className="prdct">
        <Container fluid style={{padding:'0px'}} className="prdct-container">
        <Row className="product-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>
            <Row className='prdct-description'>
                <Col className='prdct-des-img'>
                <img className='headphone-prdct-image' src='\Image\photos\Headphone2.jpg' alt='Beats5'/>
                <Button variant="warning" className='btn-warningg'>Buy now</Button>
                </Col>
                <Col className='prdct-des-side'>
                    <h1>Beats 5 Headphone(Black Color)</h1>
                    <hr></hr>
                    <h3>Price: $245 (60%% off)</h3>
                    <h4>Inclusive all taxes</h4>
                    <hr></hr>
                    <p>7 days replaceble</p>
                    <p>Free Delivery</p>
                    <p>1 year warranty</p>
                    <p>Top brand</p>
                    <hr></hr>
                    <p>Brand: Beats</p>
                    <p>Model: Beats 3</p>
                    <p>Connectivity: Bluetooth and wire both</p>
                    <p>Form factor: Over ear</p>
                    <hr></hr>
                    <p className='abt-this-itm'>About this item</p>
                    <p>
                    Built-in Head Tracking: Turn your head and you will hear a change in the direction of the sound for uninterrupted audio immersion with the help of gyroscope and accelerometer that is enabled in these headphones. <br></br>
Beats 3 & Spatial Sound: Experience sound the way it was intended with Beats operational model. Riveting spatial audio lends an immersive experience while watching movies or playing fast-paced games. Toggle b/w Head-tracked spatial, Fixed Spatial and “signature sound” mode as per your wish. <br></br>
Playback: Add a dose of musical delight to long trips and daily commute with the up to 20 hours playback of these headphones. These headphones provide 15 HRS of playback in headtracking mode. <br></br>
Clear Voice Calls: Integrated with boAt’s ENx technology, the headphones dual mics cut through the noise for crystal-clear conversations no matter where you are. Breeze through work calls at a café or busy workspace without pesky background sounds. <br></br>
ASAP Charge: Don’t let low charge play spoilsport to your fun. Juice up your Nirvana Eutopia for just 10 minutes and jam to feet-tapping music for up to 90 minutes. <br></br>
Low Latency: Gaming sessions with your squad are bound to be entertaining with these headphones in tow. High-octane audio combined with the 65 ms low latency of BEAST mode, paves the way for adrenaline-pumping victory at all times! <br></br>
Beats Hearables App Support: Nirvana Eutopia is compatible with the boAt Hearables app providing numerous functions at your fingertips. Set up head tracking(toggle on/off), get battery & connectivity status, run smart diagnostics & explore other advanced functions for next-level listening.


                    </p>

                </Col>

            </Row>

        </Container>
        </div>
    </>)
}

export default Productpage2