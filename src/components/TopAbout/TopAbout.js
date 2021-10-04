import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TopAbout = () => {
    return (
        <div className="mt-5 mb-3">
            <Container className="mt-4 mb-3">
                <Row xs={1} md={2}>
                    <Col>
                        <h2 className="text-primary">Who We Are</h2>
                        <p>
                            The International eDegree aims to grant global access to quality undergraduate, graduate, and postgraduate level education course for students at virtually no cost. Its mission is to change the Nation and the world situation through appropriate, International education.
                        </p>
                        <p>
                            Making authentic knowledge readily available to the world through the Internet solely for God’s pleasure is a noble life-goal and a mission well worth sacrificing all of one’s energies and means for.
                        </p>
                    </Col>
                    <Col>
                        <h2 className="text-primary">Variation of Course</h2>
                        <div class="text-start mt-3">
                            <div className="mb-4">
                                <h4>Arts and Humanities</h4>
                                <p>Here we Provide world top class University top class courses.We have also some Professor's courses</p>
                            </div>
                            <div className="mb-4">
                                <h4>Cloud and IT</h4>
                                <p>Here we Provide world top class University top class courses.We have also some Professor's courses</p>
                            </div>
                            <div className="mb-4">
                                <h4>Computer Science</h4>
                                <p>Here we Provide world top class University top class courses.We have also some Professor's courses</p>
                            </div>
                            <div className="mb-4">
                                <h4>Business</h4>
                                <p>Here we Provide world top class University top class courses.We have also some Professor's courses</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default TopAbout;