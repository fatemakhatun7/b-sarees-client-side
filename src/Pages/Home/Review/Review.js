import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
    return (
        <div className='mb-20 mt-10 bg-rose-100 py-4 mx-6 border rounded-lg flex justify-around'>
            <div>
                <div className='text-yellow-600'>
                    <FaStar className='w-12 sm:w-24 h-12 sm:h-24'></FaStar>
                </div>
                <div className='flex justify-center'>
                    <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalfAlt/>
                </div>
            </div>
            <div>
                <div>
                    <p className='bg-yellow-600 text-white border rounded-full p-3 sm:px-5 sm:py-7 text-medium sm:text-2xl font-medium sm:font-extrabold'>2M+</p>
                </div>
                <div>
                    <p className='text-xs sm:text-xl font-xs sm:font-bold text-center'>Downloads</p>
                </div>
            </div>
            <div>
                <div>
                    <p className='bg-yellow-600 text-white border rounded-full p-3 sm:px-5 sm:py-7 text-medium sm:text-2xl font-medium sm:font-extrabold'>4.5</p>
                </div>
                <div>
                    <p className='text-xs sm:text-xl font-xs sm:font-bold text-center'>Ratings</p>
                </div>
            </div>
            <div>
                <div>
                    <p className='bg-yellow-600 text-white border rounded-full p-3 sm:px-5 sm:py-7 text-medium sm:text-2xl font-medium sm:font-extrabold'>91k+</p>
                </div>
                <div>
                    <p className='text-xs sm:text-xl font-xs sm:font-bold text-center'>Reviews</p>
                </div>
            </div>
        </div>
    );
};

export default Review;