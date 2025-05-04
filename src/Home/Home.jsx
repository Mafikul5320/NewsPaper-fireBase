import React from 'react';
import Header from '../components/Header';
import '../App.css'
import LatestNews from '../components/LatestNews';
import Navber from '../components/Navber';
import LeftSite from '../components/LeftSite';
import RightSite from '../components/RightSite';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navber></Navber>
            <main className='grid grid-cols-12 w-11/12 mx-auto gap-7'>
                <div className='col-span-3 sticky top-0 h-fit'>
                    <LeftSite></LeftSite>
                </div>
                <div className='col-span-6 '>
                    <Outlet></Outlet>
                </div>
                <div className='col-span-3 sticky top-0 h-fit'>
                    <RightSite></RightSite>
                </div>
            </main>
        </div>
    );
};

export default Home;