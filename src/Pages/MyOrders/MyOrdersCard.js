import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersCard = ({myOrder}) => {
    const {
        product_image, 
        product_price, 
        buyer_name, 
        buyer_email} = myOrder;

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
                    <p className='font-bold'>Price: ${product_price}</p>
                </div>
                <div className='flex justify-around mb-3'>
                    <div>
                        <Link className="btn">booked</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersCard;