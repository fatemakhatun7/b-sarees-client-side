import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyProductCard = ({myProduct}) => {
    const [btn, setBtn] = useState('Advertise');

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
    } = myProduct;

    const handleAdvertise = () =>{
        const advertise = {
            product_image: myProduct.product_image
        }

        fetch('https://b-sarees-server.vercel.app/advertise', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertise)
        })
        toast.success('product added to the advertise list successfully.')
        setBtn('Advertised');
    }

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
                <div className='flex justify-around mb-3'>
                    <Link 
                    onClick={handleAdvertise} className="btn">{btn}</Link>
                    <Link className="btn">delete</Link>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;