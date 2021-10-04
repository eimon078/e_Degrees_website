import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import Cart from '../Cart/Cart';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import SomeStatistics from '../SomeStatistics/SomeStatistics';
import StudyReason from '../StudyReason/StudyReason';

const Home = () => {
    const courses = useCourses();
    return (
        <div>

            <HomeCarousel></HomeCarousel>

            {/* services */}
            <div className="mt-5 mb-3">
                <h3>eDegree online  Services</h3>
                <p>Stand out from the crowd by learning your discipline from a different perspective.</p>
                <Container className="mt-3">
                    <Row xs={1} md={4} className="g-4">
                        {
                            courses.slice(0, 4).map(course => <Cart
                                key={course.id}
                                course={course}
                            ></Cart>)
                        }

                    </Row>
                </Container>
            </div>

            {/* why study here*/}
            <StudyReason></StudyReason>

            {/* someStatistics */}
            <SomeStatistics></SomeStatistics>

        </div>
    );
};

export default Home;