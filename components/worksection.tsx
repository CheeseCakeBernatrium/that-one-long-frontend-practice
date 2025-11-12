'use client';

import { Button, Card, Container, Row, Col } from "react-bootstrap";

function WorkSection() {
    return(
        <Container>
            <Row className="mb-3">
                <Col md={12} className="text-center">
                    <h2 style={{ color: "white", textShadow: "2px 3px 0px #54428e"}}>Our Work</h2>
                    <p style={{ color: "white", textShadow: "2px 3px 0px #54428e"}}>It's Mostly Just Drawings</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/work_01.jpg" height={300} width={500}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Example ArtWork #1
                            </Card.Title>
                            <Card.Text>
                                Vergil from DMCV
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/work_02.jpg" height={500} width={200}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Example ArtWork #2
                            </Card.Title>
                            <Card.Text>
                                Dante from DMC3
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/work_03.jpg" height={300} width={500}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Example ArtWork #3
                            </Card.Title>
                            <Card.Text>
                                Faust from GGST
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default WorkSection;