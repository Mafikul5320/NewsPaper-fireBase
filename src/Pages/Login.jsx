import { use } from 'react';
import { Link, useLocation } from 'react-router';
import { Authcontext } from '../components/Auth/ContextAuthProvider';
import AnimationPackge from './AnimationPackge';

const Login = () => {
    const { SignIn } = use(Authcontext)
    const Location = useLocation()
    console.log(Location)

    const HandelLogin = (event) => {
        event.preventDefault();
        const Email = event.target.email.value;
        const Password = event.target.password.value;
        SignIn(Email, Password).then(res => console.log(res)).catch(error => console.log(error))
        console.log(Email, Password)
    }

    return (
        
        <div className='flex justify-center min-h-screen items-center'>
            <AnimationPackge></AnimationPackge>
            <div className="card bg-base-100 w-full  mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center font-semibold text-2xl'>Login Now</h1>
                    <form onSubmit={HandelLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input"
                            name='password'
                            placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn text-white btn-success mt-4">Login</button>
                        <h1 className='font-semibold py-2'>Dont’t Have An Account ? <Link to={"/auth/Register"}><span className='text-pink-700 underline pl-1'>Register</span></Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;