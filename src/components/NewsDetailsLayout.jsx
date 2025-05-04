import React, { useEffect, useState } from 'react';
import Header from './Header';
import RightSite from './RightSite';
import { Outlet, useLoaderData, useParams } from 'react-router';
import NewsDetails from './NewsDetails';
import PrivateRouter from './PrivateRouter';

const NewsDetailsLayout = () => {
    const { uid } = useParams();
    const Data = useLoaderData();
    const [finddata, setFindData] = useState([])
    useEffect(() => {
        const FilterData = Data.find(singleData => singleData.id == uid)
        setFindData(FilterData)
    }, [Data, uid])
    return (
        <div>
            <Header></Header>
            <main className='grid grid-cols-12 w-11/12 mx-auto gap-7'>
                <div className='col-span-9 '>
                    <PrivateRouter>
                        <NewsDetails finddata={finddata}></NewsDetails>
                    </PrivateRouter>
                </div>
                <div className='col-span-3 '>
                    <RightSite></RightSite>
                </div>
            </main>
        </div>
    );
};

export default NewsDetailsLayout;