import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const WishlistCard = ({wishlist, handleDelete}) => {

    const {
        _id,
        buyer_name,
        buyer_email,
        product_price,
        product_image,
        seller_name,
        location,
        contact
    }=wishlist

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product_image} alt="saree" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Buyer: {buyer_name}</h2>
                    <h2 className="card-title">Buyer email: {buyer_email}</h2>
                </div>
                <div className='px-3 pb-5'>
                    <p>Seller: {seller_name}</p>
                    <p className='font-bold'>Price: ${product_price}</p>
                    <p>Location: {location}</p>
                    <p>Contact: {contact}</p>
                </div>
                <div className='flex justify-around mb-3'>
                    <div className='text-center mb-3'>
                        <label htmlFor="my-modal-3" className="btn">Buy</label>
                        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                        <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold">Make payment and confirm your purchase!</h3>
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
                    <div>
                    <Link onClick={() => handleDelete(_id)} className="btn">delete</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistCard;