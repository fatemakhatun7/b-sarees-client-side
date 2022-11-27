import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/Authprovider';


const SignIn = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('You have logged in Successfully.')
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    
    const handleGoogleSignin = () => {
        signInWithGoogle().then(result => {
          console.log(result.user);
          toast.success('You have successfully logged in.');
        })
      }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 bg-lime-200 rounded-lg'>
                <h1 className='text-center text-xl font-bold my-5'>Sign In</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text hover:btn-link">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <h1 className='font-bold text-lg'>Join us as-</h1>
                    <div className='flex'>
                        <input type="radio" name="radio-2" className="radio radio-primary mx-3" />
                        <div className='text-lg font-semibold'>
                        seller
                        </div>
                    </div>
                    <div className='flex mb-5'>
                        <input type="radio" name="radio-2" className="radio radio-primary mx-3" />
                        <div className='text-lg font-semibold'>
                        user
                        </div>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='mt-3'>New to this website? <Link className='font-bold text-green-600 hover:btn-link' to="/signup">please Sign Up</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignIn;