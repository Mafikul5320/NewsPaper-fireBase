import React from 'react';
import swimming from '../assets/swimming.png'
import playground from '../assets/playground.png'
import classRoom from '../assets/class.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h1 className='font-bold text-lg'>Q-Zone</h1>
            <div className='flex flex-col justify-center p-3'>
                <img className='object-cover' src={swimming} alt="" />
                <img className='object-cover' src={playground} alt="" />
                <img className='object-cover' src={classRoom} alt="" />
            </div>
        </div>
    );
};

export default Qzone;