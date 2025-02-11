import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Faq from './Faq';
import LatestAssignments from './LatestAssignments';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <LatestAssignments></LatestAssignments>
            <Testimonials></Testimonials>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;