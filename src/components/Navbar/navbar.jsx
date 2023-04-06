import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./navbar.css";
import images from "../../assets/images/Logo.png";

function NavbarTop() {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const closeNavOnClickOutside = (e) => {
      if (!e.target.closest(".nav_menu") && !e.target.closest(".hamburger") && navOpen) {
        setNavOpen(false);
      }
    };

    document.addEventListener("click", closeNavOnClickOutside);
    return () => {
      document.removeEventListener("click", closeNavOnClickOutside);
    };
  }, [navOpen]);


  return (
    <>
      <Navbar bg="body-tertiary" className="navTop">
        <Container className="">
          <Navbar.Brand href="#"><img src={images} /></Navbar.Brand>
          <div className="hamburger" onClick={handleNavToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Nav className={`me-2 mb-2 mb-lg-0 nav_menu ${navOpen ? "activenav" : ""}`}>
            <div className="close-btn h1" onClick={handleNavToggle}>
              &times;
            </div>
            <Nav.Item>
              <Nav.Link href="#destination_section" active>

                Destinations
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Flights
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Booking
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="signup px-3">
              <Nav.Link href="#">
                Sign up
              </Nav.Link>
            </Nav.Item>
            <select className="form-select" aria-label="Select a country">
              <option value="United States">EN</option>
              {/* ... rest of the options */}
            </select>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarTop;
