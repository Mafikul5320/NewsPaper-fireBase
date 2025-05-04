import React from "react";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
        id
    } = news;
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden my-5">
            {/* Header */}
            <div className="flex items-center bg-base-300 justify-between p-4 ">
                <div className="flex items-center  gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <h2 className="font-semibold text-sm">{author.name}</h2>
                        <p className="text-xs text-gray-500">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-600">
                    <BsBookmark className="cursor-pointer" />
                    <FiShare2 className="cursor-pointer" />
                </div>
            </div>

            {/* Body */}
            <div className="p-4">
                <h1 className="font-bold text-lg mb-3">{title}</h1>
                <img
                    src={image_url}
                    alt="news thumbnail"
                    className="w-full h-95 object-cover rounded-md mb-3"
                />
                <p className="text-sm text-gray-700">
                    {details.slice(0, 250)}...
                    <Link to={`/news/details/${id}`}><button className="text-orange-500 cursor-pointer font-semibold"> Read More</button></Link>
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t text-sm text-gray-600">
                <div className="flex items-center gap-1 text-orange-400">
                    {[...Array(5)].map((_, index) => (
                        <FaStar key={index} />
                    ))}
                    <span className="ml-1 text-black font-medium">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
