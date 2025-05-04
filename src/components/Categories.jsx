import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("/categories.json").then(res => res.json());

const Categories = () => {
    const category = use(categoryPromise)
    return (
        <div>
            <h1 className='font-bold'>All Caterogy ({category.length})</h1>
            <div className='grid grid-cols-1 space-y-3 my-5'>
                {
                    category.map(oneCategories => (<NavLink to={`categories/${oneCategories.id}`} className={({isActive})=>isActive? 'bg-amber-300 btn btn-outline': "btn btn-outline" } key={oneCategories.id}>
                        {oneCategories.name}  </NavLink>))
                }
            </div>
        </div>
    );
};

export default Categories;