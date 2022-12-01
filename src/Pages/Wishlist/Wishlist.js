import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WishlistCard from './WishlistCard';

const Wishlist = () => {

    const wishlists = useLoaderData();

    return (
        <div>
            <div>
                <h2 className='ml-20 mt-20 mb-5 font-bold text-4xl'>My Wishlists</h2>
            </div>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    wishlists.map(wishlist => <WishlistCard
                    key={wishlist._id}
                    wishlist={wishlist}
                    ></WishlistCard> )
                }
            </div>
        </div>
    );
};

export default Wishlist;