'use client';

import { Container, Row, Col, Image } from "react-bootstrap";

function ServiceSection(){
    return(
        <Container className="my=5">
            <Row>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <Image src="images/about-icon1.png" alt="service 1" fluid></Image>
                    <h3>Service The First</h3>
                    <p>This Is The First Service, Watson</p>
                </Col>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <Image src="images/about-icon1.png" alt="service 2" fluid></Image>
                    <h3>Service The Second</h3>
                    <p>This Is The Second Service, Watson</p>
                </Col>
                <Col md={4} className="mb-3 text-center mb-3 py=3">
                    <Image src="images/about-icon1.png" alt="service 3" fluid></Image>
                    <h3>Service The Third</h3>
                    <p>This Is The Third Service, Watson</p>
                </Col>
            </Row>
        </Container>
    );
}

export default ServiceSection;