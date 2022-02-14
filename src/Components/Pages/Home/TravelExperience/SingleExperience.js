import React from 'react';
import { useParams } from 'react-router-dom';

const SingleExperience = () => {
    const {travelId}=useParams()
    return (
        <div>
            <h2>it's single {travelId}</h2>
        </div>
    );
};

export default SingleExperience;