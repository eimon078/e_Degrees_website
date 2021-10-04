import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../Hooks/useCourses';
import Cart from '../Cart/Cart';

const Services = () => {
    const courses = useCourses()
    return (
        <div>
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {
                        courses.map(course => <Cart
                            key={course.id}
                            course={course}
                        ></Cart>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Services;