import React from 'react';
import { Container } from 'react-bootstrap';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';
import brand4 from '../../assets/images/brand4.png';
import brand5 from '../../assets/images/brand5.png';
import './brandSection.css';

function BrandSection() {
  const brandImages = [
    {
      img: brand2,
    },
    {
      img: brand3,
    },
    {
      img: brand4,
    },
    {
      img: brand5,
    },
    {
      img: brand5,
    },
  ];

  const combinedImages = [...brandImages, ...brandImages];

  return (
    <>
      <Container className='py-5'>
        <div className="marquee-container">
          <div className="marquee-content">
            {combinedImages.map((brand, index) => (
              <div key={index} className="marquee-item">
                <img src={brand.img} alt={`brand-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

export default BrandSection;
