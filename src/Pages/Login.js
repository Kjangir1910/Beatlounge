import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = () => {
const [redirect, setRedirect] = useState(false)
const [email, setEmail] = useState();
const [password, setPassword] = useState();
const navigate = useNavigate()
useEffect ( () => {
    if (redirect) {
        window.location.href = '/register'
    }
}, [redirect])

const handleSubmit = () => {
setRedirect(true)
}

const hendleSubmit = (e) => {
    e.preventDefault()

const userData = {
    email: email,
    password: password
};

    axios.post('http://localhost:3001/login', userData)
    .then(result=> {console.log(result)
        if(result.data === "Success"){
    navigate('/')
    document.getElementById('btnLogin').innerText = "Logout"
}
    })
    .catch((err) => console.log(err))
}




    return (<>
    <div style={{ width: '100%' }} className="Login">
        <Container fluid style={{padding:'0px'}} className="Login-container">
            <Row className="l-heading">
                <Col>
                <h4 className="text-heading">BeatsLounge</h4>
                </Col>
            </Row>
            <Row className="loginform">
                <Col>
                
            <form className="l-form">
                <h4 className="form-heading-text">Sign in</h4>
                   Email Address: <input type="email tel" name="email" onChange={(e) => setEmail(e.target.value)}/>
                   Password: <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                   <Link to="/forget" >Forget password</Link>
                   <Button variant="success" onClick={hendleSubmit}>Sign in</Button>
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