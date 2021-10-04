import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeCarousel = () => {
    const imgHeight = { height: "500px" }
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        style={imgHeight}
                        src="https://images.unsplash.com/photo-1608600712992-03e5325d94c8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGUlMjBsZWFybmluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Affordability for All</h3>
                        <p>The eDegress is committed to making education affordable for
                            students regardless of where they live.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imgHeight}
                        src="https://img.freepik.com/free-photo/education-day-arrangement-table-with-copy-space_23-2148721266.jpg?size=626&ext=jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Enroll Now</h3>
                        <p>Enroll Now Our Latest Course and Increase Your Knowledge.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={imgHeight}
                        src="https://media.istockphoto.com/photos/elearning-online-education-or-internet-encyclopedia-concept-open-and-picture-id1263424631?b=1&k=20&m=1263424631&s=170667a&w=0&h=1Iu9DYwkR77QTLbKp1fC1M9gbJMCyaHoP7u3q1GqiiA="
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Seeking Knowledge</h3>
                        <p>Seeking knowledge is an obligatory deed in the Islamic faith.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;