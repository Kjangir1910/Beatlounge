// Customer Sevice 
import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cservice = () => {
    return(<>
    <div style={{ width: '100%' }} className="CS">
        <Container fluid style={{padding:'0px'}} className="CS-container">
            <Row className="contactus">
                <Col className="contactus-col">
                <h4>Contact us</h4>
                <p>If you would like to find out more about us and if you need help regarding an order, please don’t hesitate to get in touch. <br></br> We look forward to hearing from you.</p>
                </Col>
                </Row>
                <Row className="cu-form">
                    <Col className="cu-form-col">
                        <form className="cu-form-page">
                            Enter your name: <input type="text" name="Username"/> <br></br>
                            Enter your registered email address: <input type="email" name="Email"/><br></br>
                            Enter your registered mobile number: <input type="email" name="Mobile number"/><br></br>
                            <label>Comment</label>
                            <textarea name="Comment" rows={4} cols={40}/>
                            <Button variant="success">Contact us</Button>
                        </form>
                    </Col>
                </Row>

                <Row className="contact-details">
                    <Col className="contact-details-col">
                        <h6>Postal address</h6>
                        <p>201 Rogue River Husky, Washington, OR 98560, USA</p>
                        <h6>Email</h6>
                        <p>suppot@beatslounge.com</p>
                        <h6>Phone support</h6>
                        <p>9828982898</p>
                        <h6>Office hours</h6>
                        <p>9am To 5pm (Pacific Time (PT)) Monday to Friday</p>
                    </Col>
                    </Row>
           
            </Container>
    </div>
    
    </>)
}

export default Cservice