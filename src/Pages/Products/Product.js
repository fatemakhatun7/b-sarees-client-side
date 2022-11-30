import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Product = () => {
    const product = useLoaderData();
    console.log(product)
    return (
        <div>
            <p>this is product</p>
        </div>
    );
};

export default Product;