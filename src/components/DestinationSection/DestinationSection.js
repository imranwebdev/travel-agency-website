import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./destinationSection.css"
import { FaPaperPlane } from 'react-icons/fa';

const DestinationSection = () => {

    const slideimages = [
        {
            url: "https://www.roadaffair.com/wp-content/uploads/2017/09/colosseum-rome-italy-shutterstock_433413835.jpg",
            place: "Rome, Italty",
            price: "$5,42k",
            days: "10 Days Trip"
        },
        {
            url: "https://www.london.ac.uk/sites/default/files/styles/max_1300x1300/public/2018-10/london-aerial-cityscape-river-thames_1.jpg?itok=6LenFxuz",
            place: "London, UK",
            price: "$4.2k",
            days: "12 Days Trip"

        },
        {
            url: "https://a.storyblok.com/f/112937/568x464/ae1665770c/ny1.jpg/m/620x0/filters:quality(70)/",
            place: "Usa",
            price: "$4.5k",
            days: "10 Days Trip"

        },
        {
            url: "https://i.insider.com/5d26280921a86107bb51bd92?width=1000&format=jpeg&auto=webp",
            place: "Japan, Tokyo",
            price: "$5k",
            days: "15 Days Trip"

        }

    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <Row id='destination_section'>
                <Col className='text-center'>
                    <h3>Top Selling</h3>
                    <h1 >Top Destinations</h1>

                </Col>

            </Row>


            <div className="p-3">
                <Slider {...settings}>
                    {slideimages.map((slideImage, index) => (
                        <div key={index} className="p-3">
                            <div className="card m-2  destinations-card">
                                <img src={slideImage.url} alt="card" className='fluid destination_image' />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">{slideImage.place}</h5>
                                        <h5 className="card-title">{slideImage.price}</h5>
                                    </div>
                                    <p className="card-text">
                                        <FaPaperPlane /> {slideImage.days}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>

    );
};

export default DestinationSection;
