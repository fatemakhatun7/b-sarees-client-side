import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';

const Product = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <div>
                <h2 className='ml-20 mt-20 mb-5 font-bold text-4xl'>Products</h2>
            </div>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    products.map(product => <ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard> )
                }
            </div>
        </div>
    );
};

export default Product;