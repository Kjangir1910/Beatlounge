import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Forget = () => {

return (<>
    <div style={{ width: '100%' }} className="forget">
        <Container fluid style={{padding:'0px'}} className="forget-container">
        <Row className="forget-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>

            <Row className="forget-form">

                <Col>
                <form className="forget-form-inner">
                <h4 className="password-heading-text">Password assistance</h4>
                <p>Enter the email address or mobile phone number associated with your BeatLounge account.</p>
                Email or mobile phone number: <br></br> <input type="email tel" name="email/tel" />
                <Button variant="info">Continue</Button>
                <h6>Has your email address or mobile phone number changed?</h6>
                <p>If you no longer use the e-mail address associated with your Amazon account, you may contact
                      <a href="/cservice"> Customer Service </a> for help restoring access to your account.</p>
 
                </form>
                </Col>
                 </Row>
            
                
                
             
        </Container>

    </div>
    
    </>)
}

export default Forget