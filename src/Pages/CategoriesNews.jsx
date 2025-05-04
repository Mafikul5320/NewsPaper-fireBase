import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoriesNews = () => {
    const [CategorieNwews, setCategorieNwews] = useState([])
    const { id } = useParams();
    const NewsData = useLoaderData();
    useEffect(() => {
        if (id == 0) {
            setCategorieNwews(NewsData)
            return;
        }
        else if (id == 1) {
            const CategoData = NewsData.filter(news => news.others.is_today_pick == true)
            setCategorieNwews(CategoData)
        }
        else {
            const CategoData = NewsData.filter(news => news.category_id == id)
            setCategorieNwews(CategoData)
        }
    }, [NewsData, id])

    return (
        <div>
            CategoriesNews {CategorieNwews.length}
            <div className=''>
                {
                    CategorieNwews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoriesNews;