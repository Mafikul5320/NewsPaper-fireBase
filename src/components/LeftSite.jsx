import React, { Suspense } from 'react';
import Categories from './Categories';

const LeftSite = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftSite;