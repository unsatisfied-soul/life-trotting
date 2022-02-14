import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TravelExperience from './TravelExperience';
import { Link } from 'react-router-dom';

const FetchTravelExperienceData = () => {
    const [travelexperience,setTravelexperience] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=> {
        axios.get('https://nameless-brushlands-69236.herokuapp.com/experience')
        .then(res=> {
            setTravelexperience(res.data)
            console.log(res.data)
        })
       setLoading(true)
    },[])
    return (
        <Link to ='/'>
        <div>
            <div className="travelexperience py-20">
                {travelexperience.length == 0 ?  <div className="animate-pulse mx-auto">
                        <div className="rounded-full bg-yellow-500 h-12 w-12 mx-auto"></div>
                    </div> : <div className="single-travel gap-6 w-5/6 mx-auto">
                    {
                         travelexperience.map( experience => <TravelExperience 
                            key = {experience._id} singleExperience={experience} />
                        
                        )}
                
                </div>}
            </div>
        </div>
        </Link>
    );
};

export default FetchTravelExperienceData;