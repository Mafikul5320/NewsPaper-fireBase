import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center pt-6 space-y-2'>
            <img className='w-98' src={logo} alt="" />
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <h1 className='text-gray-400 font-semibold'>{format(new Date(), "EEEE,  MMMM d, yyyy")}</h1>
            
        </div>
    );
};

export default Header;