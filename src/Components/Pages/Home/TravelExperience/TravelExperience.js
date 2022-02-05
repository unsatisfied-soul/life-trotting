import React from 'react';
import { Link } from 'react-router-dom';

const TravelExperience = (props) => {
    console.log(props)
        // const {_id,writer,img,title,desc}=props.singleData
        // const split = desc.split('')
        // const doted = '...';
        // const shortArray = split.slice(0,200).join('').concat(doted)
    
    return (
        <div>
            {/* <div className="tour-img w-1/2">
               <img className="w-full" src={img} alt="" />
           </div>
           <div className="tour-desc w-1/2 py-3 px-2">
               <h6>{writer}</h6>
               <h2 className="text-3xl font-bold mb-2">{title}</h2>
               <p className="text-gray-600 mb-4">{shortArray}</p>
               <Link to = {`/singletravel/${_id}`}>
                   <button className="desc-button px-4 py-2">Read More</button>
               </Link>
           </div> */}
        </div>
    );

};

export default TravelExperience;