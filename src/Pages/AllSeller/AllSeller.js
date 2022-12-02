import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const AllSeller = () => {
    const allSellers = useLoaderData();
    // console.log(allSellers);
    const [sellers, setSellers] = useState([]);

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = sellers.filter(seller => seller._id !== id);
                        setSellers(remaining);
                    }
                })
        }
    }

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
                                <div className='text-center mb-3'>
                                    <Link onClick={() => handleDelete(allSeller._id)} className="btn btn-xs">block</Link>
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