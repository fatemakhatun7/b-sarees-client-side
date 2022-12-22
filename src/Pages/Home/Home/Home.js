import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/Authprovider';
import useTitle from '../../../hooks/useTitle';
import Advertise from '../Advertise/Advertise';
import Categories from '../Categories/Categories';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import Specialty from '../Specialty/Specialty';

const Home = () => {
    const {user} = useContext(AuthContext)
    useTitle("Home")

    return (
        <div>
            <div className='mt-10 mx-5'>
                {
                    user?.uid ?
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Hello, <span className='text-purple-900 text-3xl'>{user.displayName}.</span> <br/> Welcome to B sarees.</p>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex justify-center text-xl font-bold bg-red-100 p-10 border rounded-lg">
                                <p>Are You <span className='text-purple-900 text-3xl'>New </span> to this Website? <br/> Please Sign Up to explore more.<br/> Already have an account? please Sign in.</p>
                            </div>
                        </>
                }
            </div>
            <Slider></Slider>
            <Advertise></Advertise>
            <Categories></Categories>
            <Specialty></Specialty>
            <Review></Review>
        </div>
    );
};

export default Home;