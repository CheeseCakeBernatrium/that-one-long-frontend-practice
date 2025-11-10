'use client';

import { Button, Card, Container, Row, Col } from "react-bootstrap";

function WorkSection() {
    return(
        <Container>
            <Row className="mb-3">
                <Col md={12} className="text-center">
                    <h2>Our Work</h2>
                    <p>Eating Lunch, Watson</p>
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/work_01.jpg" height={200} width={200}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Such Is The Card Title, Watson
                            </Card.Title>
                            <Card.Text>
                                Such Is The Card Text, Watson
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/work_02.jpg" height={200} width={200}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Such Is The Card Title Second, Watson
                            </Card.Title>
                            <Card.Text>
                                Such Is The Card Text Second, Watson
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-3">
                    <Card>
                        <Card.Img variant="top" src="/images/work_03.jpg" height={200} width={200}></Card.Img>
                        <Card.Body>
                            <Card.Title>
                                Such Is The Card Title Third, Watson
                            </Card.Title>
                            <Card.Text>
                                Such Is The Card Text Third, Watson
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default WorkSection;