import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Faq from './Faq';
import HotAssignments from './HotAssignments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotAssignments></HotAssignments>
            <Features></Features>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;