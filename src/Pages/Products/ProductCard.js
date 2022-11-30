import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

    const {
        cat_name, 
        contact, 
        email, 
        location, 
        original_price,
        postDateInfo,
        product_image,
        resale_price,
        seller_name,
        usage,
        _id
    } = product;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={product_image} alt="saree" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cat_name}</h2>
                </div>
                <div className='px-3 pb-5'>
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
                    <Link className="btn">Book Now</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;