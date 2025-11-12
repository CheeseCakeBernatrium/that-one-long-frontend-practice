'use client';

import { Container, Row, Col, Image } from "react-bootstrap";

function ServiceSection(){
    return(
        <Container>
            <Row>
                <Col md={4} className="mb-3 text-center mb-3">
                    <Image src="images/service_01.png" alt="service 1" fluid height={200} width={200} className="mb-5"></Image>
                    <h3>Drawing Commisions</h3>
                    <p>I accept any drawing commision for $20</p>
                </Col>
                <Col md={4} className="mb-3 text-center mb-3">
                    <Image src="images/service_02.png" alt="service 2" fluid height={200} width={200} className="mb-5"></Image>
                    <h3>Coding Projects</h3>
                    <p>I can help with coding for free :D</p>
                </Col>
                <Col md={4} className="mb-3 text-center mb-3">
                    <Image src="images/service_03.png" alt="service 3" fluid height={200} width={200} className="mb-5"></Image>
                    <h3>Video Editing</h3>
                    <p>I can edit videos with decent quality</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ServiceSection;