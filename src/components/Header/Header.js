import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="shadow p-3 mb-5 bg-body rounded">
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <h3>e<span className="text-warning">Degrees</span></h3>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col>
                        <nav className="text-md-start">
                            <ul className="navlink text-md-start">
                                <li className="border-start border-warning">
                                    <NavLink className="text-decoration-none text-body fw-bolder" to="/home">Home</NavLink>
                                </li>
                                <li className="border-start border-warning">
                                    <NavLink className="text-decoration-none text-body fw-bolder" to="/Services">Services</NavLink>
                                </li>
                                <li className="border-start border-warning">
                                    <NavLink className="text-decoration-none text-body fw-bolder" to="/price">Price</NavLink>
                                </li>
                                <li className="border-start border-warning">
                                    <NavLink className="text-decoration-none text-body fw-bolder" to="/About">About</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;