import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './testimonial.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import required modules
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";


function TestimonialSection() {
  const cards = [
    {
      profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU",
      reviewText: '"Excellent service and easy to use website! Booked my vacation hassle-free with great deals and quick response time from customer support"',
      name: "Mike taylor",
      position: 'CEO Of Example'
    },
    {
      profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj9ySx6w03MteA7LmBWIqr5C7rhqOdC8xY2SLkoAN03bMZfXmTVpRmcH3ewSR_pFpxqJM&usqp=CAU",
      reviewText: '"The travel agency website provided me with an excellent booking experience."',
      name: "Alice",
      position: 'Founder Of Example'
    },
    {
      profileImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUk5E3d2WjsOKmzQyawUcy6ySDQsEQPAxy4rxttRzQzipM_vSodwZn1Oh0dyBWhOSNv8&usqp=CAU",
      reviewText: '""Amazing experience! The travel agency provided excellent service and made our trip unforgettable. Highly recommend booking through them for your next adventure.',
      name: "Jack",
      position: 'Ollyo Founder'
    },
  ];
  return (<>
    <Container className='py-5'id="testimonial_section">
      <Row className='p-3'>
        <Col md={6}>
          <h3>Testimonials</h3>
          <h1>What people say
            about Us.</h1>
        </Col>
        <Col md={6} className='card-section-testimonial '>
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {cards.map((slide, index) => {
              return (<>
                <SwiperSlide key={index}>
                  <Card className='testimonial-card p-3 pt-5'>
                    <img src={slide.profileImg}className='img-fluid' />
                    <Card.Body>
                      <Card.Title><h3>{slide.reviewText}</h3></Card.Title>
                      <Card.Text className='text-start'><strong>{slide.position}</strong></Card.Text>
                    </Card.Body>
                  </Card>


                </SwiperSlide>

              </>)
            })}



          </Swiper>
        </Col>
      </Row>
    </Container>
  </>
  );
};
export default TestimonialSection;


