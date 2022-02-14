import React from 'react';
import { Link } from 'react-router-dom';
import './TravelExperience.css'

const TravelExperience = (props) => {
    const {_id,travelImage,title,date}=props.singleExperience
    console.log(props.singleExperience)
    // const {_}=useParams()
    
    return (
        <div className='travel-blog relative border-2 border-[#ffd416] overflow-hidden'>
            <Link to={`/travelBlog/${_id}`}>
            
            <div className="travel-img h-full">
                <img className='h-full' src={travelImage} alt="" />
            </div>
            <div className="travel-desc relative -top-36 text-left bg-[#f4f4f0] py-4 pl-8 pr-3 ">
                <h4>{date}</h4>
                <h2 className='text-[#615247] '>{title}</h2>
            </div>
            </Link>
        </div>
        
    );

};

export default TravelExperience;