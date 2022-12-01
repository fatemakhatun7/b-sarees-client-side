import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseCard = ({advertise}) => {
    const {product_image} = advertise;

    return (
        <div className="carousel carousel-center max-w-md p-4 mb-5 space-x-4 bg-neutral rounded-box">
            <div className="carousel-item">
                <Link to='/categories'>
                <img src={product_image} alt="saree" className="rounded-box" />
                </Link>
            </div>
        </div>
    );
};

export default AdvertiseCard;