import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllSeller = () => {
    const allSellers = useLoaderData();
    console.log(allSellers);

    return (
        <div>
            <div>
            <h2 className='ml-20 my-10 font-bold text-xl'>All Sellers</h2>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    allSellers.map(allSeller =>
                        <div className="card w-96 bg-base-100 shadow-xl mb-5">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{allSeller.displayName}</h2>
                                <p>Email: {allSeller.userEmail}</p>
                            </div>
                            <div className='flex justify-around'>
                                <div className='text-center mb-3'>
                                    <Link className="btn btn-xs">Make Admin</Link>
                                </div>
                                <div className='text-center mb-3'>
                                    <Link className="btn btn-xs">verify</Link>
                                </div>
                            </div>
                    </div>  )
                }
            </div>
        </div>
        </div>
    );
};

export default AllSeller;