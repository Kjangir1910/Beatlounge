import Container from "react-bootstrap/esm/Container"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../Layout.css'


const About = () => {
    return( <>
        <div style={{ width: '100%' }} className="aboutdiv">
        <Container fluid style={{padding:'0px'}} className="About"> 
        <Row className="welcome" >
            <Col className="welcomesection">
        <h2>Welcome to BeatLounge</h2>
        <p>
        At BeatLounge, we're more than just an e-commerce platform — we're a community-driven marketplace dedicated to enhancing your lifestyle and enriching your shopping experience. Our journey began with a vision to revolutionize online shopping by offering not just products, but solutions that simplify and elevate your everyday life.
        </p>
        </Col>
        </Row>

        <Row className="ourStory">
            <Col className="ourStorySection">
            <h2>
            Our Story
            </h2>

            <p>
            Founded in 2019 by a team of passionate entrepreneurs, BeatLounge was born out of a desire to bridge the gap between convenience and quality. Frustrated by the lack of accessible yet high-quality products in the market, we set out on a mission to create an online destination where discerning shoppers could find everything they need under one roof.
            </p>
            </Col>
        </Row>
            
            <Row className="ourmission">
                <Col className="ourmissionsection">
                <h2>
                Our Mission
                </h2>

                <p>
                At BeatLounge, our mission is simple: to empower you to live your best life by providing innovative, affordable, and sustainable solutions that enhance your well-being and happiness. From cutting-edge gadgets to eco-friendly home essentials, we curate a diverse range of products that cater to your unique tastes and preferences.
                </p>
                </Col>
            </Row>

            <Row>
                <Col>
                <h2>
                Why Choose Us?
                </h2>

                <p><span>Diverse Selection: </span>Discover an extensive selection of products carefully curated to meet your diverse needs, interests, and lifestyles. Whether you're a fashion-forward trendsetter, a fitness enthusiast, or a savvy homemaker, we've got something for everyone.
                </p>
                <p>
                <span> Uncompromising Quality: </span> We're committed to sourcing and delivering only the highest quality products from trusted manufacturers and brands. Rest assured, every item in our catalog meets stringent quality standards for durability, performance, and safety.
                </p>
                <p>
                <span>Innovation and Sustainability: </span> As champions of innovation and sustainability, we prioritize eco-friendly and ethically sourced products that minimize environmental impact and promote responsible consumption.
                </p>
                <p>
                <span>Personalized Service: </span> Your satisfaction is our top priority. Our friendly and knowledgeable customer sevice team is here to assist you with any questions, concerns, or special requests, ensuring a seamless and personalized shopping experience.
                </p>

                <p>
                <span>Community Engagement: </span> We believe in giving back to the community and making a positive impact on society. Through philanthropic initiatives, charitable partnerships, and advocacy efforts, we strive to create a better world for future generations.
                </p>

                 </Col>
            </Row>
            <Row>
                <Col>
                <h2> Join Our Community</h2>
                <p>
                Join our growing community of like-minded individuals who share our passion for innovation, sustainability, and excellence. Whether you're a seasoned shopper or a first-time visitor, we welcome you to explore our virtual aisles and experience the difference that BeatLounge can make in your life.

                Thank you for choosing BeatLounge. We're honored to be your trusted partner on your journey to a happier, healthier, and more fulfilling lifestyle.
                </p>
                </Col>
            </Row>
        </Container>
             </div>

    </>
    
    )
    
    }
    
    export default About