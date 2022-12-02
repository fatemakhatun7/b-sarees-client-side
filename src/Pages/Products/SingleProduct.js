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
        product_image, 
        original_price,
        postDateInfo,
        resale_price,
        seller_name,
        usage
    } = singleProduct;

    const handleMyOrders = () =>{

        const myOrders = {
            buyer_name : user.displayName,
            buyer_email: user.email,
            product_price: singleProduct.resale_price,
            product_image: singleProduct.product_image,
        }

        fetch('http://localhost:5000/myOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myOrders)
        })
        toast.success('your payment is completed! we will deliver your product soon. Thank you.')
    }

    return (
        <div className='flex justify-center my-10'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product_image} alt="saree" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
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
                              onClick={handleMyOrders}
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