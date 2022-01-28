import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer border-dashed border-t-2 border-[#6d6d6d] text-left py-8 flex gap-6 mt-8'>
            <div className="footer-left relative left-12">
            <div className="social-link mb-4">
                <Link to="www.facebook.com" className='ml-4'>
                    <FontAwesomeIcon className=' text-[#4b6b7a] text-4xl hover:text-[#58c5f8]' icon={faFacebook} ></FontAwesomeIcon>
                </Link>
                <Link to="www.facebook.com" className='ml-4'>
                    <FontAwesomeIcon className=' text-[#4b6b7a] text-4xl hover:text-[#58c5f8]' icon={faTwitter} ></FontAwesomeIcon>
                </Link>
                <Link to="www.facebook.com" className='ml-4'>
                    <FontAwesomeIcon className=' text-[#4b6b7a] text-4xl hover:text-[#58c5f8]' icon={faYoutube} ></FontAwesomeIcon>
                </Link>
                <Link to="www.facebook.com" className='ml-4'>
                    <FontAwesomeIcon className=' text-[#4b6b7a] text-4xl hover:text-[#58c5f8]' icon={faWhatsapp} ></FontAwesomeIcon>
                </Link>
                <Link to="www.facebook.com" className='ml-4'>
                    <FontAwesomeIcon className=' text-[#4b6b7a] text-4xl hover:text-[#58c5f8]' icon={faInstagram} ></FontAwesomeIcon>
                </Link>
                </div>
                <div className="copyright mt-2 px-4">
                    <p className='text-[#4b6b7a]'>©2021 Travel Oregon | The official guide to Oregon travel and tourism information.
                    To contact us, call 1-800-547-7842 or email info@traveloregon.com</p>
                </div>
            </div>
            <div className="footer-right relative left-4 py-2 text-center">
                <div className="footer-center w-4/5 mx-auto">
                    <h2 className="font-['Handlee']  text-2xl font-bold mb-3 text-[#313131]">Acknowledgement of Country</h2>
                    <p className=' text-[#6e6e6e]'>
                    We acknowledge the Traditional Aboriginal and Torres Strait Islander Owners of the land, sea and waters of the Australian continent, and recognise their custodianship of culture and Country for over 60,000 years.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;