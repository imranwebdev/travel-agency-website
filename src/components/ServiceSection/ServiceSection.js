import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import radio from "../../assets/images/radio.png";
import plane from "../../assets/images/plane.png";
import musicIcon from "../../assets/images/musicIcon.png";
import gear from "../../assets/images/gear.png";
import circle from "../../assets/images/circle.svg";
import "./servicesection.css"
function serviceSection() {
    return (
        <>

            <Row className="text-center service"id="service_section">
            <img src={circle}className="fluid circle-desing"style={{opacity:"0.5",zIndex:"-DF100"}}/>

            <Col>
                    <h3>category</h3>
                    <h1 style={{fontSize:"36px"}}>We Offer Best Services</h1>
                    
                </Col>
            </Row>
            <Row className="justify-content-center pt-3 p-3 card-section">
                <Col xs={12} md={6} lg={3} className="mb-3">
                    <Card style={{ width: '18rem', height: '250px' }} className="text-center m-auto">
                        <Card.Img variant="top" src={radio} className="fluid w-25  m-auto" />
                        <Card.Body>
                            <Card.Title>Calculated Weather</Card.Title>
                            <Card.Text>
                                Built Wicket longer admire do barton vanity itself do in it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
                    <Card style={{ width: '18rem', height: '250px' }} className="text-center m-auto">
                        <Card.Img variant="top" src={plane} className="fluid w-25  m-auto" />
                        <Card.Body>
                            <Card.Title>Best Flight</Card.Title>
                            <Card.Text>
                                Engrossed listening. Park gate sell they west hard for the.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
                    <Card style={{ width: '18rem', height: '250px' }} className="text-center m-auto">
                        <Card.Img variant="top" src={musicIcon} className="fluid w-25  m-auto" />
                        <Card.Body>
                            <Card.Title>Local Events</Card.Title>
                            <Card.Text>
                                Barton vanity itself do in it. Preferd to men it engrossed listening.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} lg={3} className="mb-3">
                    <Card style={{ width: '18rem', height: '250px' }} className="text-center m-auto">
                        <Card.Img variant="top" src={gear} className="fluid w-25  m-auto" />
                        <Card.Body>
                            <Card.Title>Customization</Card.Title>
                            <Card.Text>
                                We deliver outsourced
                                aviation services for
                                military customers
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </>
    )
}
export default serviceSection;
