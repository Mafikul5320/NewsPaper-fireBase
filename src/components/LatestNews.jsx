import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='bg-[#F3F3F3] flex items-center p-5 rounded-xl w-11/12 mx-auto my-5 gap-5'>
            <button className='btn px-6 py-3 btn-secondary '>Latest</button>
            <Marquee pauseOnHover speed={80} className='flex '>
                <p className='pr-6'>
                    নতুন বাংলাদেশ গড়তে শ্রম সংস্কার কমিশনের সুপারিশ বাস্তবায়ন করবে সরকার: প্রধান উপদেষ্টা
                    নতুন বাংলাদেশ গড়তে শ্রম সংস্কার কমিশনের সুপারিশ বাস্তবায়ন করবে সরকার: প্রধান উপদেষ্টা</p>
                <p className='pr-6'>
                    হারা ম্যাচে বাংলাদেশের হয়ে ১০ উইকেট নিয়েছেন কারা, দেখুন তো জানেন কি না</p>
                <p>নতুন বাংলাদেশ গড়তে শ্রম সংস্কার কমিশনের সুপারিশ বাস্তবায়ন করবে সরকার: প্রধান উপদেষ্টা</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;