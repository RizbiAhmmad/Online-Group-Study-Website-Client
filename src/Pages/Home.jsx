import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Faq from './Faq';
import HotAssignments from './HotAssignments';
import LatestAssignments from './LatestAssignments';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <LatestAssignments></LatestAssignments>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;