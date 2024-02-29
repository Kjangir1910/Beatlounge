import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Createotp = () => {
    return(<>
     <div style={{ width: '100%' }} className="createotp">
        <Container fluid style={{padding:'0px'}} className="create-otp-container">
        <Row className="create-heading">
                <Col>
                <h4>BeatLounge</h4>
                </Col>
            </Row>
            <Row className="create-otp-form">
                <Col>
                <form className="create-otp-inner">
                    <label>Enter OTP</label> <br></br>
                    <input type="password"  name="otp" ch="6"   />
                    <Button variant="warning">Create account</Button>
                    <p>Start your journey with us and become a member of Beatslounge <br></br>by creating  your account. </p>
                    </form>
                
                </Col>
 </Row>
</Container>
        </div>
    
    </>)
}

export default Createotp