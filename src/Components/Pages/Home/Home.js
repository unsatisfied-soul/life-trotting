import React from 'react';
import AdventurePic from './AdventurePic/AdventurePic';
import Featurepost from './Featureposts/Featurepost';
import FetchTravelExperienceData from './TravelExperience/FetchTravelExperience';

const Home = () => {
    return (
        <div>
            <Featurepost />
            <AdventurePic />
        </div>
    );
};

export default Home;