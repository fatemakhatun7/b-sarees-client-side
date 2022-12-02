import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import WishlistCard from './WishlistCard';

const Wishlist = () => {
    useTitle("Wishlist")
    const [wishes, setWishes] = useState([]);

    const wishlists = useLoaderData();

    const handleDelete = id => {
        const proceed = window.confirm('Do you want to delete this review?');
        if (proceed) {
            fetch(`https://b-sarees-server.vercel.app/wishlists/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('deleted successfully');
                        const remaining = wishes.filter(wish => wish._id !== id);
                        setWishes(remaining);
                    }
                })
        }
    }

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
                    handleDelete={handleDelete}
                    ></WishlistCard> )
                }
            </div>
        </div>
    );
};

export default Wishlist;