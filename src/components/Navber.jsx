import { use } from 'react';
import USer from '../assets/user.png'
import { Link, NavLink } from 'react-router';
import { Authcontext } from './Auth/ContextAuthProvider';

const Navber = () => {
    const { user, SignOut } = use(Authcontext)

    const HandelLogOut = () => {
        SignOut().then(() => { }).catch(error => { console.log(error.message) })
    }
    return (
        <div className='flex justify-between w-11/12 mx-auto'>
            <div className=""><span className='text-blue-600 font-extrabold'>{user && user.email}</span></div>
            <div className="">
                <ul className='flex items-center space-x-4 text-gray-400 font-bold'>
                    <NavLink to={"/"}>Home</NavLink>
                    <li>About</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="flex items-center gap-3">
                <img className='w-15 rounded-full' src={user ? user.photoURL : USer} alt="" />
                {
                    user ? <button onClick={HandelLogOut} className='btn btn-accent px-7 font-mono shadow-lg text-white'>Log out</button> : <Link to={"/auth/Login"}><button className='btn btn-accent px-7 font-mono shadow-lg text-white'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navber;