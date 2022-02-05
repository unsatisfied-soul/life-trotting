import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faClosedCaptioning } from '@fortawesome/free-solid-svg-icons';
import TravelExperience from './TravelExperience';

const FetchTravelExperienceData = () => {
    const [travelexperience,setTravelexperience] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        axios.get('https://nameless-brushlands-69236.herokuapp.com/experience')
        .then(res=> {
            setTravelexperience(res.data)
        })
       setLoading(true)
    },[])
    return (
        <div>
            <div className="travelexperience">
                {travelexperience.length == 0 ?  <div className="animate-pulse mx-auto">
                        <div className="rounded-full bg-yellow-500 h-12 w-12 mx-auto"></div>
                    </div> : <div className="single-travel gap-8">
                    {
                         travelexperience.map( experience => <TravelExperience 
                            key = {experience._id} singleExperience={experience} />
                        
                        )}
                
                </div>}
            </div>
        </div>
    );
};

export default FetchTravelExperienceData;