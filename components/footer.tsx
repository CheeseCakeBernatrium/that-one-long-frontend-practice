'use client'
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return (
        <footer id="footer" className='pt-md-5 pd-md-2 py-3 bg-light'>
            <Container>
                <Row>
                    <Col md={3}>
                        <h3>Our Products</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href="#">Account</a></li>
                            <li className='mb-2'><a href="#">Bundle</a></li>
                            <li className='mb-2'><a href="#">Blog</a></li>
                            <li className='mb-2'><a href="#">Contacts</a></li>
                            <li className='mb-2'><a href="#">Circulat</a></li>
                        </ul>
                    </Col>
                    {/* Quick Link */}
                    <Col md={3}>
                        <h3>Quick Link</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href="#">Home</a></li>
                            <li className='mb-2'><a href="#">About Us</a></li>
                            <li className='mb-2'><a href="#">Service</a></li>
                            <li className='mb-2'><a href="#">Work</a></li>
                            <li className='mb-2'><a href="#">Products</a></li>
                        </ul>
                    </Col>
                    {/* Terms */}
                    <Col md={3}>
                        <h3>Terms</h3>
                        <ul className='list-unstyled'>
                            <li className='mb-2'><a href="#">Refund Policy</a></li>
                            <li className='mb-2'><a href="#">Privacy Policy</a></li>
                            <li className='mb-2'><a href="#">License</a></li>
                        </ul>
                    </Col>
                </Row>
                {/* Search + Social */}
                
            </Container>
        </footer>
    );
}