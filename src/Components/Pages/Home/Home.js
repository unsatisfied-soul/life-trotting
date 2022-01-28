import React from 'react';
import FetchData from '../../FetchData/FetchData';
import AdventurePic from './AdventurePic/AdventurePic';
import Featurepost from './Featureposts/Featurepost';

const Home = () => {
    return (
        <div>
            <Featurepost />
            <AdventurePic />
            <FetchData />
        </div>
    );
};

export default Home;