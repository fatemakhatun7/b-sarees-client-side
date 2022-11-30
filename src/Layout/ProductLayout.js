import React from 'react';
import { Outlet } from 'react-router-dom';
import Products from '../Pages/Products/Products';

const ProductLayout = () => {
    return (
        <div>
            <Products></Products>
            <Outlet></Outlet>
        </div>
    );
};

export default ProductLayout;