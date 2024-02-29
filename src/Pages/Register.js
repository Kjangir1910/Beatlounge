import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [redirect, setRedirect] = useState(false)
    useEffect ( () => {
        if (redirect) {
            window.location.href = '/createotp'
        }
    }, [redirect])
    
    const hendleSubmit = () => {
    setRedirect(true)
    }

    return( <>
    <div style={{ width: '100%' }} className="register">
        <Container fluid style={{padding:'0px'}} className="register-container">
        <Row className="register-heading">
                <Col>
                <h4>BeatLounge</h4>
                </Col>
            </Row>
            

            <Row className="create-form">
                <Col>
                <form className="create-form-inner">
                    <h4 className="create-heading-text">Create Account</h4>
                    Enter your name: <input type="text" name="Username"/> <br></br>
                    Mobile number: <input type="tel" name="Tel"/> 
                    <p>Gender:</p>
                    <input type="radio" id="Male" name="Gender" value="Male" />
                    <label for="Male">Male</label>
                    <input type="radio" id="Female" name="Gender" value="Female" />
                    <label for="Female">Female</label>
                    <input type="radio" id="Other" name="Gender" value="Other" />
                    <label for="Other">Other</label> <br></br>
                    Password: <br></br> <input type="password" />
                    <p>Passwords must be at least 6 characters.</p>
                    <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                    <Button variant="warning" onClick={hendleSubmit}>Verify mobile numebr</Button>  
                    <p>Already have an account</p>
                    <Link className="signinlink" to="/login">Sign in</Link>
                    
                    </form>
                </Col>
            </Row>

        </Container>
        </div>

    </>
    
    )
    
    }
    
    export default Register