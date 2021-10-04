import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const StudyReason = () => {
    return (
        <div className="mt-5 mb-3">
            <h3>Top Reasons To Study at eDegree</h3>
            <p>We would like to remind you of some of the many benefits of studying at IOU</p>
            <Container className="mt-4 mb-3">
                <Row>
                    <Col>
                        <img src="https://iou.edu.gm/wp-content/uploads/2020/10/Why-IOU.jpg" alt="" />
                    </Col>
                    <Col>
                        <div class="text-start">
                            <div className="mb-4">
                                <h3>Accessibility</h3>
                                <p>You can study online from anywhere in the world.</p>
                            </div>
                            <div className="mb-4">
                                <h3>Affordability</h3>
                                <p>Fees are comparatively low and affordable for a degree program</p>
                            </div>
                            <div className="mb-4">
                                <h3>Community</h3>
                                <p>You could be a part of a global community of over 10,000 students from over 50+ countries.</p>
                            </div>
                            <div className="mb-4">
                                <h3>Islamic Ethics</h3>
                                <p>We strive for the highest standards of personal integrity, honesty and responsibility as Muslims first.</p>
                            </div>
                            <div>
                                <h3>Authenticity</h3>
                                <p>Our curriculum is based on correct and authentic knowledge based on the principles of Ahlus Sunnah wal Jama’ah.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    );
};

export default StudyReason;