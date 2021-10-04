import React, { createContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import PriceCart from '../PriceCart/PriceCart';
export const supportContext = createContext("support");

const Price = () => {
    const pricePlans = [
        { price: 20, plan: "Basic" },
        { price: 50, plan: "Standrad" },
        { price: 100, plan: "Premium" }
    ];
    return (
        <supportContext.Provider value="Special live Support">
            <div className="mb-5">
                <h3>SELECT THE PLAN</h3>
                <Container className="mt-4 mb-3">
                    <Row xs={1} md={3} className="g-4">
                        {
                            pricePlans.map(pp => <PriceCart
                                key={pp.price}
                                pricePlan={pp}
                            ></PriceCart>)
                        }
                    </Row>

                </Container>
            </div>
        </supportContext.Provider>
    );
};

export default Price;