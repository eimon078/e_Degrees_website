import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import img from "../../Images/form-pic.jfif"

const BottomAbout = () => {
    return (
        <div>
            <h2 className="text-primary">Share Your Experience</h2>
            <p>For we will improve our journey</p>
            <div className="mt-5 mb-3">
                <Container className="mt-4 mb-3">
                    <Row xs={1} md={2}>
                        <Col>
                            <img className="w-100 h-100" src={img} alt="" />

                        </Col>
                        <Col className="border border-secondary">
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control placeholder="Subject" />
                                </Form.Group>
                                <Row className="mb-3">
                                    <textarea placeholder="Message" rows="10" cols="30" />
                                </Row>

                                <div className="mb-3">
                                    <Button className="w-25" variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Form>

                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    );
};

export default BottomAbout;