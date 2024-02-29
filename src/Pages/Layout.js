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


const Layout = () => {
  const [redirect, setRedirect]= useState(false)

  useEffect( () => {

    if(redirect){
      window.location.href = "/login"
    }
  
  }, [redirect])

  const hendleClick = () => {
    setRedirect(true)
  }
return( <>
<meta name="viewport" content="width=device-width, initial-scale=1" />
   <Navbar expand="lg" className="navBar">
      <Container className='maincontainer'>
        <Navbar.Brand className='LogoNav' href="#home"><img src='\Image\Icons\beatsLogo.png'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='ToggleNav'/>
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto navLink ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/">Products</Link>
            <Button variant="primary" onClick={hendleClick}>Login</Button>


  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Outlet/>



    <footer className='footer'> 

    <Container className=' C.F '>
      <Row className='Rows'>
        <Col className='Footer-a'>
            <img src='\Image\Icons\beatsLogo.png' height="30px" width="30px" />
        </Col>
        <Col className='Footer-b '>
         
            <Link to="/">Products</Link>
            <Link to="/">Headphone</Link>
            <Link to="/">Earphone</Link>
            <Link to="/">Earbuds</Link>
            <Link to="/">Accessories</Link>
         </Col>
        <Col className='Footer-c '>
        <Link to="/cservice">Support</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/register">Register</Link>
            <Link to="/about">About</Link>
            <Link to="/privacy">Policy </Link>
            
        </Col>

        </Row>

    </Container>
        
    </footer>

</>

)

}

export default Layout