import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const SomeStatistics = () => {
    return (
        <div className="mt-5 mb-5">
            <h3>Some Fact About Us</h3>
            <Container className="mt-4 mb-3">
                <Row>
                    <Col>
                        <h2 className="text-primary">10+</h2>
                        <h3>Instructors</h3>
                        <p>WORLD WIDE</p>
                    </Col>
                    <Col>
                        <h2 className="text-primary">20+</h2>
                        <h3>Representatieves</h3>
                        <p>WORLD WIDE</p>
                    </Col>
                    <Col>
                        <h2 className="text-primary">2200+</h2>
                        <h3>Certificate</h3>
                        <p>PROVIDED IN LAST YEAR</p>
                    </Col>
                    <Col>
                        <h2 className="text-primary">1570+</h2>
                        <h3>Enrolled</h3>
                        <p>AROUND THE WORLD</p>
                    </Col>
                </Row>

            </Container>
        </div>

    );
};

export default SomeStatistics;