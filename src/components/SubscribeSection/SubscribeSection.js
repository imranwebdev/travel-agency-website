import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import cardImage from "../../assets/images/card.png";
import icon1 from "../../assets/images/listIcon.png";
import "./subscribeSection.css"
import icon2 from "../../assets/images/listIcon2.png";
import icon3 from "../../assets/images/listIcon3.png";
function SubscribeSection() {
    const listItems = [
        {
            img: icon1,
            title: 'Choose Destination',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus'
        },
        {
            img: icon2,
            title: 'Make Payment',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. '
        },
        {
            img: icon3,
            title: 'Reach Airport on Selected Date',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. '
        }
    ]



    return (
        <>
            <Container fluid className="subscribe-section"id="subscribe_section">
                <Row className="d-md-flex flex-column-reverse flex-md-row p-lg-5">
                    <Col md={6} className="content-text p-md-5 p-5  ">
                        <h3 className="pb-2 text-uppercase mt-lg-5">Easy and Fast</h3>
                        <h1>
                            Book your next trip
                            in 3 easy steps
                        </h1>
                        <ul className="pt-5">
                            {listItems.map((listItem, index) => (
                                <li key={index} className="d-flex justify-content-between list_item mb-3">
                                    <img src={listItem.img} className="fluid" />
                                    <div className="px-3">
                                        <strong>{listItem.title}</strong>
                                        <p>{listItem.text}</p>
                                    </div>
                                </li>
                            ))}

                        </ul>

                    </Col>
                    <Col md={6}>
                        <Container className="pt-5">
                            <img src={cardImage} className="img-fluid" />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default SubscribeSection;
