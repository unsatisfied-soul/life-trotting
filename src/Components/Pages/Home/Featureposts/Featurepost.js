import React from 'react';
import FetchTravelExperienceData from '../TravelExperience/FetchTravelExperience';
import './Featurepost.css'
const Featurepost = () => {
    return (
        <div className='featurepost pt-24'>
            <div className="feature-heading w-3/4 mx-auto">
                <h4 className='text-[#81d8f3] text-2xl font-bold mb-5'>Travel Writing</h4>
                <h2 className='text-7xl font-bold mb-4'>We Share Our Travel Stories</h2>
                <p className="font-medium mx-6 text-2xl text-[#a1a1a1bd] font-['Patrick_Hand']">Browse through our first-hand travel articles, supported by beautiful photo material. Through our lens you'll only get to see the reality around us: real life - no staging and no pre-arrangements of any kind.</p>
            </div>
            <div className="feature-details ">
               <FetchTravelExperienceData />
            </div>
        </div>
    );
};

export default Featurepost;