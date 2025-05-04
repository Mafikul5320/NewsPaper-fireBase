import React, { use } from 'react';
import { Authcontext } from './Auth/ContextAuthProvider';
import { Navigate } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loding } = use(Authcontext)

    if (loding) {
        return <div className='flex justify-center min-h-screen'>
            <span className="loading loading-spinner text-error"></span>
        </div>
    }
    if (!user && !user?.email) {
        return <Navigate state={location.pathname} to={"/auth/Login"}></Navigate>
    }

    return children;
};

export default PrivateRouter;