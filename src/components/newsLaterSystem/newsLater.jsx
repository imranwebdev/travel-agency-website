import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import "./newsLater.css"
import mask from '../../assets/images/mask.svg'
import mask2 from '../../assets/images/mask2.svg'
import { FaPaperPlane } from 'react-icons/fa';

function NewsLater() {
    return (<>

       <Container className="p-3">
<Row>
    <Col className="text-center">
        <div className="newsLater-section position-relative">
        <h3>Subscribe to get information, latest news and other
interesting offers about Cobham</h3>
<br></br>
<br></br>
<input type="email"placeholder="Your email"/>

<button className="mt-3">subscribe</button>
       <img src={mask} alt="icon" srcset=""className="position-absolute top-0 end-0 "/>
       
       <img src={mask2} style={{width:"300px"}} srcset=""className="position-absolute bottom-0 start-0"/>
       
<FaPaperPlane className="plane-icon position-absolute top-0 start-100 translate-middle"/> 
        </div>
    </Col>
</Row>
       </Container>
    </>)
}
export default NewsLater;