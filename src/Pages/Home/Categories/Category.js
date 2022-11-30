import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({cate}) => {
    const {name, Description , img} = cate;
    console.log(cate);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-44 hover:scale-125 transition-all duration-500 cursor-pointer" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{Description}</p>
            </div>
            <div className='text-center mb-3'>
                <Link to='/categories' className="btn">See more</Link>
            </div>
        </div>
    );
};

export default Category;