import React, { useState, useEffect } from 'react';
import './herosection.css';
import { Col, Row, Container } from 'react-bootstrap';
import images from '../../assets/images/Traveller.png';
import svg from '../../assets/images/highlight.svg';
import svgbg from '../../assets/images/designbg.svg';
import { FaPlayCircle } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';


function HeroSection() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [loading, setIsLoading] = useState(false);

  function openLightbox() {
    setIsLightboxOpen(true);
    setIsLoading(true);
  }

  function closeLightbox() {
    setIsLightboxOpen(false);
    setIsLoading(false);
  }

  function handleIframe() {
    setIsLoading(false);
  }

  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 600,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  return (
    <Container fluid className="hero-section">
      <Row className="d-md-flex flex-column-reverse flex-md-row p-lg-5">
        <Col md={6} className="content-text p-md-5 p-4 position-relative">
          <h3 className="pb-2 text-uppercase mt-lg-5">
            Best Destinations around the world
          </h3>
          <h1 style={{ fontSize: '48px' }}>
            Travel,{' '}
            <span className="position-relative">
              enjoy{' '}
              <img
                src={svg}
                className="position-absolute top-100 start-50 translate-middle"
                width={'200px'}
              />
            </span>{' '}
            and live a new and full life
          </h1>

          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="d-flex" >
            <button className="primary-btn">find out more</button>
            <div className="custom-button">
              <FaPlayCircle />
              <span className="button-text"onClick={openLightbox}>Play Demo</span>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Container className="pt-5" data-aos="fade-left">
            <img src={images} className="img-fluid w-100" alt="Travel" />
          </Container>
        </Col>
      </Row>
      <div className="circle position-absolute top-0 start-0 translate-middle"></div>
      <img
        src={svgbg}
        className="position-absolute top-0 end-0 svg-bg fluid w-md-50"
        alt="SVG Background"
      />
      {isLightboxOpen && (
        <div className="lightbox">
          <div className="lightbox-content positon-relative">
            <AiOutlineClose
              onClick={closeLightbox}
              className="close_btn position-absolute top-0 end-0"
            />
            <br />
            <br />
            {loading && <p>Loading...</p>}
     
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/sL4tmH7A-7E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
          onLoad={handleIframe}
        ></iframe>
   
    </div>
  </div>
)}

    </Container>
  );
}

export default HeroSection;
