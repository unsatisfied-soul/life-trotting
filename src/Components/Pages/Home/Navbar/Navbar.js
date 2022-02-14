import React, { useState } from 'react';
import { faAlignJustify, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const [navBar, setNavBar] = useState(false);
    const {user,logout} = useAuth();
    const [logInfo,setLogInfo]= useState(false)
    return (
        <div className='flex justify-between md:block bg-[#81d8f3] pt-6 pb-3 relative menubar'>
            {
                user?.email ?
                <div className="login-data absolute right-10 top-2 z-40">
                    <div onClick={()=> setLogInfo(!logInfo)} className="login-id flex justify-center">
                        <h2 className='h-16 w-16 bg-[#ff6b16] text-5xl text-white rounded-full cursor-pointer'>{user.email.charAt(0)}</h2>
                        
                    </div> 
                    <div className={logInfo ? "block login-info": "hidden"}>
                        <h4 className='relative -top-3 text-[#ff6b16] text-2xl'><FontAwesomeIcon icon={faCaretDown} /></h4>
                        <ul className='bg-[#ff6b16] relative -top-4 py-1 login_data overflow-hidden'>
                            <li className='hover:bg-[#9AD0EC] hover:scale-125 ease-in-out duration-300 px-6 py-2 border-b-2'>All Stories</li>
                            <li className='hover:bg-[#9AD0EC] hover:scale-125 ease-in-out duration-300 px-6 py-2 border-b-2'>Make a Admin</li>
                            <li className='hover:bg-[#9AD0EC] hover:scale-125 ease-in-out duration-300 px-6 py-2 '><button onClick={logout}>LogOut</button></li>
                        </ul>
                        
                    </div>
                    
                </div>
                :
                <Link to='/login'> <button className='absolute right-12 top-2 bg-[#ff6b16] text-xl text-white font-medium px-8 py-4'>Login</button>
                </Link>
            }
            <div className="">
                <h2 className='mx-6 block md:hidden'><Link className='text-2xl relative block px-3 py-5 logo font-bold -mt-4 rounded-full' to="">Life <br />Trotting </Link></h2>
            </div>
            
            <nav className='z-10'>
                <button className='mobile-nav' 
                onClick={()=> setNavBar(!navBar)}
                >
                    {navBar ? (<FontAwesomeIcon className='relative md:hidden block right-10 text-5xl top-2 text-[#F6F2D4]' icon={faTimes} ></FontAwesomeIcon>)
                     :  ( 
                        <FontAwesomeIcon className='relative right-10 text-5xl md:hidden block top-2 text-[#F6F2D4]' icon={faAlignJustify} ></FontAwesomeIcon> )
                    }
                </button>
                
                <div className={navBar ? "block" : "hidden md:block"} onClick={()=>setNavBar(false)}>
                <ul className='md:flex justify-center menu absolute md:relative z-10 w-full bg-[#81d8f3] md:bg-transparent'>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-3 py-3 overflow-hidden' to="/places"><span>Places to Go</span> <span>Places to Go</span></Link></li>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-4 py-3 overflow-hidden' to="/aboutUs"><span>Who are We</span><span>Who are We</span></Link></li>
                    <h2 className='mx-2 hidden md:block'><Link className='text-2xl relative block px-5 py-5 logo font-bold -mt-4 rounded-full' to="/home"> <span className="font-['Mochiy_Pop_P_One']">Life</span> <br />Trotting</Link></h2>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-3 py-3 overflow-hidden' to="/planTrip"><span>Plan your Trip</span> <span>Plan your Trip</span></Link></li>
                    <li className='relative m-2'><Link className='h-12 menu-link text-2xl relative block px-3 py-3 overflow-hidden' to="/experience"><span>Add own Experience</span><span>Add own Experience</span></Link></li>
                </ul>
                </div>
                
            </nav>
            
        </div>
    );
};

export default Navbar;