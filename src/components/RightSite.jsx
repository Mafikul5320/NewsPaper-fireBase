import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const RightSite = () => {
    return (
        <div className='space-y-7'>
            <h1 className='font-semibold my-5'>Login With</h1>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightSite;