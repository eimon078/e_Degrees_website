import React from 'react';
import BottomAbout from '../BottomAbout/BottomAbout';
import MiddleAbout from '../MiddleAbout/MiddleAbout';
import TopAbout from '../TopAbout/TopAbout';

const About = () => {
    return (
        <div>
            <TopAbout></TopAbout>
            <MiddleAbout></MiddleAbout>
            <BottomAbout></BottomAbout>
        </div>
    );
};

export default About;