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

const Products = () => {
    const [redirect, setRedirect]= useState(false)

    useEffect(() => {
        if(redirect) {
            window.location.href = '/productpage1'
            window.location.href = '/productpage2'
        }
    }, [redirect])

    const handleClick = () => {
        setRedirect(true)
    }
    return(<>
    <div style={{ width: '100%' }} className="products">
        <Container fluid style={{padding:'0px'}} className="products-container">
        <Row className="product-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>
            <Row className='headphone'>
                <h2><Link to="/headphone">Headphones</Link></h2>
                    <Col>
                    <img className='headphone-a' src='\Image\Icons\specsImage.png' alt='Beats3'/>
                    <h1>Beats 3</h1>
                    <p>Price: $199 (75% off)</p>
                    <Button variant="warning" onClick={handleClick}>Buy now</Button>
                    </Col>
                    <Col>
                    <img src='\Image\photos\Headphone2.jpg' alt='Beats5' height='320px' width='320px'/>
                    <h1>Beats 5</h1>
                    <p>Price: $245 (60% off)</p>
                    <Button variant="warning" onClick={handleClick}>Buy now</Button>
                    </Col>
                    <Col>
                    <img src='\Image\photos\Headphone3.jpg' alt='Beats4' height='320px' width='320px'/>
                    <h1>Beats 4</h1>
                    <p>Price: $175 (80% off)</p>
  </Col>
            </Row>

            <Row className='Earphone'>
            <h2><Link to="/earphone">Earphones</Link></h2>
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
            <Row className='Earbuds'>
            <h2><Link to="/earbuds">Earbuds</Link></h2>
            <Col>
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
            <Row className='accessories-a'>
            <h2><Link to="/accessories">Accessories</Link></h2>
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

export default Products