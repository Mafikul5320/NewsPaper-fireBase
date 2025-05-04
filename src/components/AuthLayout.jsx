import React from 'react';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Navber from './Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <nav className='my-6'>
                <Navber></Navber>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;