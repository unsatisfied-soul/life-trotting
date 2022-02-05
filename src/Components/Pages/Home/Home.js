import React from 'react';
import AdminRoute from '../../AdminRoute/AdminRoute';
import AdventurePic from './AdventurePic/AdventurePic';
import Featurepost from './Featureposts/Featurepost';
import FetchTravelExperienceData from './TravelExperience/FetchTravelExperience';

const Home = () => {
    return (
        <div>
            <Featurepost />
            <FetchTravelExperienceData />
            <AdminRoute />
            <AdventurePic />
        </div>
    );
};

export default Home;