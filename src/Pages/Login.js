import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Login = () => {
const [redirect, setRedirect] = useState(false)
useEffect ( () => {
    if (redirect) {
        window.location.href = '/register'
    }
}, [redirect])

const handleSubmit = () => {
setRedirect(true)
}



    return (<>
    <div style={{ width: '100%' }} className="Login">
        <Container fluid style={{padding:'0px'}} className="Login-container">
            <Row className="l-heading">
                <Col>
                <h4 className="text-heading">BeatLounge</h4>
                </Col>
            </Row>
            <Row className="loginform">
                <Col>
                
            <form className="l-form">
                <h4 className="form-heading-text">Sign in</h4>
                   Email or mobile phone number: <input type="email tel" name="Email/Tel"/>
                   Password: <input type="password" name="Password"/>
                   <Link to="/forget" >Forget password</Link>
                   <Button variant="success">Sign in</Button>
                   <p>New to BeatLounge?</p>
                   <Button variant="info" onClick={handleSubmit}>Create new account</Button>  
                    </form>
                </Col>
            </Row>
        </Container>

    </div>
    
    </>)
}


export default Login