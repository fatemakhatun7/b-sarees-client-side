import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const AllBuyer = () => {
    const allBuyers = useLoaderData();
    // console.log(allBuyers);
    const [buyers, setBuyers] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`https://b-sarees-server.vercel.app/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = buyers.filter(buyer => buyer._id !== id);
                        setBuyers(remaining);
                    }
                })
        }
    }

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
                                    <Link onClick={() => handleDelete(allBuyer._id)} className="btn btn-xs">block</Link>
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