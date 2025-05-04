import React, { use } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../components/Auth/ContextAuthProvider';

const Register = () => {
    const { SignUp, UpdateUser, setUser } = use(Authcontext)
    const HandelRegister = (e) => {
        e.preventDefault()
        const Name = e.target.name.value;
        const Url = e.target.url.value;
        const Email = e.target.email.value;
        const Password = e.target.password.value;
        console.log(Name, Url, Email, Password)
        SignUp(Email, Password).then(res => {
            UpdateUser({
                displayName: Name,
                photoURL: Url
            }).then(() => {
                setUser({
                    ...res, displayName: Name,
                    photoURL: Url
                })
            }).catch(error => console.log(error))
        }).catch(error => error.message)

    }
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full  mx-auto max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center font-semibold text-2xl'>Register Now</h1>
                    <form onSubmit={HandelRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" name='name' placeholder="Name" />
                        <label className="label">Photo Url</label>
                        <input type="text" name='url' className="input" placeholder="Photo url" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <button className="btn text-white btn-primary mt-4">Register</button>
                        <h1 className='font-semibold py-2'>Already Have An Account ? <Link to={"/auth/login"}><span className='text-pink-700 underline pl-1'>Login Now</span></Link></h1>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;