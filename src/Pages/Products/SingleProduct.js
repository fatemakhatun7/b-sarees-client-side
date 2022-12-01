import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import { toast } from 'react-hot-toast';

const SingleProduct = () => {
    const singleProduct = useLoaderData();
    // console.log(singleProduct);
    const {user} = useContext(AuthContext);

    const {
        cat_name, 
        contact, 
        email, 
        location, 
        original_price,
        postDateInfo,
        resale_price,
        seller_name,
        usage
    } = singleProduct;

    return (
        <div className='flex justify-center my-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                <div className='card-title'>
                    <h1>Buyer: {user.displayName}</h1>
                </div>
                <div className='card-title'>
                    <h1>Buyer email: {user.email}</h1>
                </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Saree: {cat_name}</h2>
                </div>
                <div className='card-body px-3 pb-5'>
                    <p>Seller: {seller_name}</p>
                    <p className='font-bold'>Resale price: ${resale_price}</p>
                    <p>Original price: ${original_price}</p>
                    <p>Used for: {usage} Years</p>
                    <p>Post time: {postDateInfo.postTime}, 
                     {postDateInfo.postDay}
                    </p>
                    <p>Location: {location}</p>
                    <p>Contact: {contact}</p>
                    <p>Email: {email}</p>
                </div>
                <div className='text-center mb-3'>
                    <label htmlFor="my-modal-3" className="btn">Buy</label>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Your booking is confirmed!</h3>
                        <div className='text-center'>
                            <Link to='/'
                              onClick={()=>{
                                toast.success('your payment is completed! we will deliver your product soon. Thank you.')
                              }}
                              className="btn btn-sm mt-5">
                                Make payment</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;