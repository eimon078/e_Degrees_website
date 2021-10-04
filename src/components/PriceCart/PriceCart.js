import React, { useContext } from 'react';
import { Col, Button } from 'react-bootstrap';
import { supportContext } from '../Price/Price';

const PriceCart = (props) => {
    const { price, plan } = props.pricePlan
    const value = useContext(supportContext);
    return (
        <>
            <Col>
                <h3 className="text-primary">{plan}</h3>
                <h6>$<span className="fs-1">{price}</span>/Mo</h6>
                <div>
                    <p>Certificated</p>
                    <p>Full Courses</p>
                    <p>All Modules</p>
                    <p>Live Projects</p>
                    <p>24 X 7 Support</p>
                    <p>{value}</p>
                </div>
                <div>
                    <Button variant="warning" className="w-50">Select Plan</Button>{' '}
                </div>
            </Col>
        </>
    );
};

export default PriceCart;