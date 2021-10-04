import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const MiddleAbout = () => {
    return (
        <div className="mt-5 mb-3">
            <Container className="mt-4 mb-3">
                <Row xs={1} md={2}>
                    <Col>
                        <h2 className="text-primary">Our Mission</h2>
                        <p>
                            Making authentic Islamic knowledge readily available to the world through the Internet solely for God’s pleasure is a noble life-goal and a mission well worth sacrificing all of one’s energies and means for.The International Open University provides a golden opportunity to access quality undergraduate, graduate and postgraduate level courses, wherever people may be and whenever they wish, without having to travel overseas or even leave the confines of their homes. Its goal is to enable education to anyone, from any place, at any time.
                        </p>
                    </Col>
                    <Col>
                        <h2 className="text-primary">Our Vission</h2>
                        <p>
                            The eDegree is committed to providing a top quality online academic experience, suitable in its scope and depth, to convey the authentic and project based knowledge, while at the same time enabling its students to face the contemporary challenges of the 21st century by offering other fields of study such as psychology, education or finance. eDegree will assess and re-evaluate every aspect of its academic model on an ongoing basis and will not only encourage its students to study diligently, but also emphasize that they must strive their utmost to put the knowledge gained into practice.
                        </p>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default MiddleAbout;