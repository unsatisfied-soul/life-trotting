import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleExperience = () => {
    const {travelId}=useParams();
    const [singleId,setSingleId]=useState({})
    useEffect(()=> {
        const url = `https://nameless-brushlands-69236.herokuapp.com/experience/${travelId}`
        axios.get(url)
        .then(res=> setSingleId(res.data))
    },[])
    return (
        <div className='travel-content w-10/12 mx-auto pt-2'>
            <div className="travelImg">
                <img className='w-full' src={singleId.travelImage} alt="" />
            </div>
            <div className="travel-content py-6">
                <h2 className="text-5xl font-bold mb-2">{singleId.title}</h2>
                <h4 className='text-xl mb-4'>written by: <span className='text-[#0497db] font-bold'>{singleId.writer}</span></h4>
                <p className='text-xl text-left'>{singleId.desc}</p>
            </div>
        </div>
    );
};

export default SingleExperience;