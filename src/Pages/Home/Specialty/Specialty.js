import React from 'react';
import img4 from '../../../assets/images/img-4.jpg';

const Specialty = () => {
    return (
        <div className='mx-5 my-20 border-l-8 border-lime-500'>
            <div className='flex p-3 justify-around'>
                <div className='text-center'>
                    <p className='font-bold text-lg'>Specialty</p>
                    <ul>
                        <li>Get saree with low cost</li>
                        <li>Sell unused saree</li>
                        <li>Earn money</li>
                        <li>Get different kinds of saree</li>
                        <li>can share experience</li>
                        <li>Have a business experience with a small step</li>
                        <li>Earn stars and get discount by using our services.</li>
                    </ul>
                </div>
                <div className='hidden sm:block'>
                    <img className='rounded-lg h-56 hover:scale-125 transition-all duration-500 cursor-pointer' src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Specialty;