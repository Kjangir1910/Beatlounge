import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'

const Home = () => {
    return( <>
    
    <div style={{ width: '100%' }}>
    <Container fluid style={{padding:'0px'}} className="homecontainer">
        {/* Overview Section */}
        <Row className="overview">
            <Col className="main-img">
            <img src='\Image\Icons\mainImage.png' height="180px"/>
            </Col>
            <Col className="main-section">
            <h1>Beats 3</h1>
            <h3>Overview</h3>
            <p>
            Enjoy award-winning Beats sound with <br></br>wireless listening freedom and a sleek, <br></br> streamlined design with comfortable <br></br>padded earphones, delivering first-rate <br></br>playback.
            </p>
            <Button className="main-button" variant="warning">Buy now</Button>
            </Col>
            </Row>


            {/* Social Media Section */}
            <Row className="sms">
                <Col className="sms-logo">
                <img src='\Image\Icons\appleLogo.png'/>
                </Col>
                <Col className="sms-logo">
                <img src='\Image\Icons\spotifyLogo.png'/>
                </Col>
                <Col className="sms-logo">
                <img src='\Image\Icons\amazonLogo.png'/>
                </Col>
                <Col className="sms-logo">
                <img src='\Image\Icons\youtubeLogo.png'/>
                </Col>

 </Row>


 {/* Specs Section */}
<Row className="specs">
    <Col className="specs-logo">
    <img src='\Image\photos\specsLogo.png' />
    </Col>
</Row>

<Row className="specs-list">
    <Col>
    <div className="blutooth">
    <img src='\Image\photos\bluetooth.png' />
                    <p>Connection</p>
                    <p>Bluetooth v5.2</p>
    </div>

    <div className="battery">
        <img src='\Image\photos\battery.png' alt="battery"/>
                    <p>Battery</p>
                    <p>Duration 40h</p>
                </div>
                <div className="charger">
                    <img src='\Image\photos\charger.png' />
                    <p>Load</p>
                    <p>Fast Charge 4.2-AAC</p>
                </div>
                <div className="mike">
                    <img src='\Image\photos\mic.png' alt="mike"/>
                    <p>Microphone</p>
                    <p>Supports Apple Siri <br></br> and Google</p>
                </div>
    </Col>

    <Col className="specs-img">
    <img src='\Image\photos\specsImage (1).png' height="250px"/>
    </Col>

</Row>


{/* Case section */}
<Row className="case">
    <Col className="case-logo"><img src='\Image\photos\caseLogo.png' /></Col>
    </Row>
        
        <Row className="case-main">
            <Col className="case-left">
            <img src='\Image\Icons\caseImage.png' height="350px"/>
            </Col>
            <Col className="case-right">
            <p>
            With a comfortable and <br></br>adaptable case so that <br></br> you can store it whenever <br></br> you want, and keep your <br>
            </br>durability forever.
            </p>
            <Button className="case-button" variant="warning">More products</Button>
            </Col>
        </Row>

        {/* Immense Section */}
        <Row className="immense">
            <Col className="immense-left">
            <h1>Immense yourself in <br></br> your music</h1>
            <p>Buy Now, up to 40% off.</p>
            <Button className="immense-button" variant="warning">More products</Button>
            
            </Col>
            
            <Col className="immense-right"> <img src='\Image\Icons\buyNowSectionImage.png' width="350px"/></Col>
    </Row>
    


    </Container>
    </div>

    </>
    
    )
    
    }
    
    export default Home