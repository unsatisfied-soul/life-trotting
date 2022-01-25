import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [navBar, setNavBar] = useState(false)
    return (
        <div className='flex justify-between md:block bg-[#81d8f3] pt-6 pb-3 relative menubar'>
            <div className="">
                <h2 className='mx-6 block md:hidden'><Link className='text-2xl relative block px-3 py-5 logo font-bold -mt-4 rounded-full' to="">Life <br />Trotting </Link></h2>
            </div>
            
            <nav>
                <button className='mobile-nav' 
                onClick={()=> setNavBar(!navBar)}
                >
                    {navBar ? (<FontAwesomeIcon className='relative md:hidden block right-10 text-5xl top-2 text-[#F6F2D4]' icon={faTimes} ></FontAwesomeIcon>)
                     :  ( 
                        <FontAwesomeIcon className='relative right-10 text-5xl md:hidden block top-2 text-[#F6F2D4]' icon={faAlignJustify} ></FontAwesomeIcon> )
                    }
                </button>
                
                <div className={navBar ? "block" : "hidden md:block"} onClick={()=>setNavBar(false)}>
                <ul className='md:flex justify-center menu absolute md:relative w-full bg-[#81d8f3] md:bg-transparent'>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-3 py-3 overflow-hidden' to=""><span>Places to Go</span> <span>Places to Go</span></Link></li>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-4 py-3 overflow-hidden' to=""><span>Who are We</span><span>Who are We</span></Link></li>
                    <h2 className='mx-2 hidden md:block'><Link className='text-2xl relative block px-5 py-5 logo font-bold -mt-4 rounded-full' to=""> <span className="font-['Mochiy_Pop_P_One']">Life</span> <br />Trotting</Link></h2>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-3 py-3 overflow-hidden' to=""><span>Plan your Trip</span> <span>Plan your Trip</span></Link></li>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-3 py-3 overflow-hidden' to=""><span>Add own Experience</span><span>Add own Experience</span></Link></li>
                </ul>
                </div>
                
            </nav>
            
        </div>
    );
};

export default Navbar;