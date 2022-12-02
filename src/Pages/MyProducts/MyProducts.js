import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import MyProductCard from './MyProductCard';

const MyProducts = () => {
    useTitle("My products")
    const myProducts = useLoaderData();
    
    return (
        <div>
            <div>
                <h2 className='ml-20 mt-20 mb-5 font-bold text-4xl'>My Products</h2>
            </div>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    myProducts.map(myProduct => <MyProductCard
                    key={myProduct._id}
                    myProduct={myProduct}
                    ></MyProductCard> )
                }
            </div>
        </div>
    );
};

export default MyProducts;