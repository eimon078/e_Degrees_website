import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Cart = (props) => {
    const { cname, img, institue, instructor, price } = props.course
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={img} style={{ height: "200px" }} />
                    <Card.Body>
                        <Card.Title>{cname}</Card.Title>
                        <Card.Text>
                            Institue: {institue}
                        </Card.Text>
                        <Card.Text>
                            Instructor: {instructor}
                        </Card.Text>
                        <Card.Text>
                            <span className="fw-bold"> Price: ${price}</span>
                        </Card.Text>
                        <Card.Text>
                            <div>
                                <Button variant="warning" className="w-50">Enroll Now</Button>{' '}
                            </div>
                        </Card.Text>
                        <Card.Text>
                            {props.children}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default Cart;