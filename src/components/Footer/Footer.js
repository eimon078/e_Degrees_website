import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="bg-light m-2 p-3 pb-5">
            <Container>
                <Row>
                    <Col>
                        <h4>Quick Links</h4>
                        <ul className="footer-link">
                            <li><Link className="text-decoration-none text-body me-5" to="/home">Home</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/services">Services</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/price">Price</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/About">About</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Follow Us</h4>
                        <ul className="footer-link">
                            <li><Link className="text-decoration-none text-body me-5" to="/facebook">Facebook</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/twitter">Twitter</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/instagram">Instagram</Link></li>
                            <li><Link className="text-decoration-none text-body me-5" to="/linkedin">Linkedin</Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Contact Us</h4>
                        <div>
                            <p className="mb-0">+880 123-456-7890</p>
                            <p className="mb-0">example@gmail.com</p>
                            <p className="mb-0">Lakshmipur Sadar, Lakshmipur</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;