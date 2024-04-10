import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    // const [redirect, setRedirect] = useState(false)
    // useEffect ( () => {
    //     if (redirect) {
    //         window.location.href = '/createotp'
    //     }
    // }, [redirect])
    
    // const hendleSubmit = () => {
    // setRedirect(true)
    // }
    const [name, setName] = useState()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()
    // const [token, setToken] = useState();
  
    // const handleRegister = async () => {
    //   try {
    //     await axios.post('http://localhost:5000/register', { email, password });
    //     console.log('User registered successfully');
    //   } catch (error) {
    //     console.error('Registration failed:', error.response.data.error);
    //   }
    // };

    const handleSubmit = (e) => {
        e.preventDefault()

    const userData = {
        name: name, 
        email: email,
        password: password
    };

        axios.post('http://localhost:3001/register', userData)
        .then(result=> {console.log(result)
        navigate('/login')
        })
        .catch((err) => console.log(err))
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
        
    //     const userData = {
    //         name: name, // assuming you have variables named name, email, and password
    //         email: email,
    //         password: password
    //     };
    
    //     axios.post('http://localhost:3001/register', userData)
    //         .then(result => {
    //             console.log(result);
    //             // handle success, maybe redirect user or show a success message
    //         })
    //         .catch(err => {
    //             console.error(err);
              
    //         });
    // };
    

  

    return( <>

    <div style={{ width: '100%' }} className="register" >
        <Container fluid style={{padding:'0px'}} className="register-container">
        <Row className="register-heading">
                <Col>
                <h4>BeatsLounge</h4>
                </Col>
            </Row>
            

            <Row className="create-form">
                <Col>
                <form className="create-form-inner" >
                    <h4 className="create-heading-text">Create Account</h4>
                    Enter your name: <input type="text" name="name" 
                    onChange={(e) => setName(e.target.value)}/> <br></br> 
                    Email: <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/> 
                    {/* <p>Gender:</p>
                    <input type="radio" id="Male" name="Gender" value="Male" />
                    <label for="Male">Male</label>
                    <input type="radio" id="Female" name="Gender" value="Female" />
                    <label for="Female">Female</label>
                    <input type="radio" id="Other" name="Gender" value="Other" />
                    <label for="Other">Other</label> <br></br> */}
                    Password: <br></br> <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <p>Passwords must be at least 6 characters.</p>
                    <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                    <Button className="Rbtn" variant="warning" onClick={handleSubmit} >Create account</Button>  
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