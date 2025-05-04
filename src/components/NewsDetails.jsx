import React from 'react';
import { Link, useNavigate } from 'react-router';


const NewsDetails = ({ finddata }) => {
    const Navigate = useNavigate()

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border">
            <img
                className="w-full h-64 object-cover"
                src={finddata.image_url}
                alt="News Thumbnail"
            />
            <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800 mb-3">
                    {finddata.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">Tuesday, April 22, 2025</p>
                <p className="text-sm text-gray-700 mb-4">
                    {finddata.details}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-blue-600 mb-4">
                    <span className="bg-blue-100 px-2 py-1 rounded">#politics</span>
                    <span className="bg-blue-100 px-2 py-1 rounded">#elections</span>
                    <span className="bg-blue-100 px-2 py-1 rounded">#local government</span>
                    <span className="bg-blue-100 px-2 py-1 rounded">#political parties</span>
                    <span className="bg-blue-100 px-2 py-1 rounded">#Bangladesh</span>
                </div>
                <div className="flex items-center gap-3">
                    <img
                        className="w-10 h-10 rounded-full"
                        src="https://randomuser.me/api/portraits/women/41.jpg"
                        alt="Selina Hossain"
                    />
                    <span className="text-sm text-gray-800 font-medium">Selina Hossain</span>
                </div>
            </div>
            <div className="p-5 pt-0">
                <Link to={`/categories/${finddata.category_id}`}>
                    <button className="bg-pink-600 text-white text-sm px-4 py-2 rounded hover:bg-pink-700">
                        ← Back
                    </button>
                </Link>
                {/* <button type='button' onClick={Navigate(-1)} className="bg-pink-600 text-white text-sm px-4 py-2 rounded hover:bg-pink-700">
                    ← All news in this category
                </button> */}

            </div>
        </div>

    );
};

export default NewsDetails;