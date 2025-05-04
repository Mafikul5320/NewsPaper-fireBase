import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div >
            <h1 className='font-semibold text-xl py-6'>Find Us On</h1>
            <div className="join join-vertical w-full">
                <button className="btn justify-start join-item"><FaFacebook size={22}></FaFacebook> Facebook</button>
                <button className="btn justify-start join-item"><FaTwitter size={22}></FaTwitter> Twitter</button>
                <button className="btn justify-start join-item"><FaInstagram size={22}></FaInstagram> Instragram</button>
            </div>
        </div>
    );
};

export default FindUs;