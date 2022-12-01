import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllBuyer = () => {
    const allBuyers = useLoaderData();
    console.log(allBuyers);

    return (
        <div>
            <div>
            <h2 className='ml-20 my-10 font-bold text-xl'>All Buyers</h2>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    allBuyers.map(allBuyer =>
                        <div className="card w-96 bg-base-100 shadow-xl mb-5">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{allBuyer.displayName}</h2>
                                <p>Email: {allBuyer.userEmail}</p>
                            </div>
                            <div className='flex justify-around'>
                                <div className='text-center mb-3'>
                                    <Link className="btn btn-xs">Star</Link>
                                </div>
                                <div className='text-center mb-3'>
                                    <Link className="btn btn-xs">block</Link>
                                </div>
                            </div>
                    </div>  )
                }
            </div>
        </div>
        </div>
    );
};

export default AllBuyer;