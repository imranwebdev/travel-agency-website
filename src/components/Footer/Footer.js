import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import facebookIcon from '../../assets/images/facebook-f.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import { AiFillApple } from 'react-icons/ai';
import {FaGooglePlay } from 'react-icons/fa';

import "./footer.css"
function Footer() {
  return (
    <>
      <Row className="p-5 d-flex justify-content-center mt-5 w-100">

        <Col lg={2}>
          <h1>Jadoo</h1>
          <p>Book your trip in minute, get full
            Control for much longer.
          </p>
        </Col>

        <Col lg={2}>
          <h5 className="fw-bold">Company</h5>
          <ul className="list-unstyled footer-link">
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">about</a></li>
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Careers</a></li>
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Mobile</a></li>
          </ul>
        </Col>

        <Col lg={2}>
          <h5 className="fw-bold">Contact</h5>
          <ul className="list-unstyled footer-link">
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Help/FAQ</a></li>
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Press</a></li>
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Affilates</a></li>
          </ul>
        </Col>

        <Col lg={2}>
          <h5 className="fw-bold">More</h5>
          <ul className="list-unstyled footer-link">
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Airlinefees</a></li>
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Airline</a></li>
            <li><a href="#" className="text-decoration-none cursor-pointer footer-color-text">Low fare tips</a></li>
          </ul>
        </Col>

        <Col lg={4}>
          <div className="icon-section">
            <img src={facebookIcon} />
            <img src={instagramIcon} />
            <img src={twitterIcon} />
          </div>

          <h5 className="p-4">Discover our app</h5>
          <div className="img-section">
            <div className="d-flex justify-content-around store-section">
          <li className="d-flex justify-content-between align-items-center store-item pt-2 px-3">
              <FaGooglePlay className="text-white icon" />
              <div className="px-2">
                <p className="text-white">Avalibe on the <br></br><strong>Play Store</strong></p>
              </div>
            </li>
            <br></br>
            <li className="d-flex justify-content-between align-items-center store-item pt-2 px-3">
              <AiFillApple className="text-white icon" />
              <div className="px-2">
                <p className="text-white">Avalibe on the <br></br><strong> Apple Store</strong></p>
              </div>
            </li>
            </div>
          </div>
        </Col>

      </Row>

    </>
  )
}
export default Footer;
