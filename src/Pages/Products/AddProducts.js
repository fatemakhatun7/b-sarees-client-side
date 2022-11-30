import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';

const AddProducts = () => {
    const {user} = useContext(AuthContext);
    const [addProduct, setAddProduct] = useState({});

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data    
        }
    });



    const handleSubmit = e =>{
        e.preventDefault();
        console.log(addProduct);

        
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newProduct = {...addProduct}
        newProduct[field] = value;
        setAddProduct(newProduct);
    }

    return (
        <div>
            <div className='my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
            <div>
                <p className='text-center text-2xl font-semibold my-5'>Add a Product</p>
            </div>
            <div className='hero my-10 bg-rose-100 py-4 mx-6 border rounded-lg'>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSubmit} className='card-body'>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name="seller_name" placeholder="Your name" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">Your photo</span>
                            </label>
                            <input onBlur={handleInputBlur} type="file" name="seller_photo" placeholder="Your photo" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Email</span>
                            </label>
                            <input onBlur={handleInputBlur} type="email" name="email" placeholder="Your email" value={user.email} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Category Name</span>
                            </label>
                            <select onBlur={handleInputBlur} name="product_name" className="select select-info w-full max-w-xs">
                                <option disabled selected>Select a category</option>
                                {
                                    categories.map(category=>
                                        <option key={category._id}
                                        value={category.cate_name}>{category.cate_name}</option>)
                                }
                            </select>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Product image</span>
                            </label>
                            <input onBlur={handleInputBlur} type="file" name="product_image" placeholder="product image"  className="input input-bordered input-info max-w-xs mb-2"/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Location
                                </span>
                            </label>
                            <input onBlur={handleInputBlur} type="text" name="location" placeholder="location" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Resale price
                                </span>
                            </label>
                            <input onBlur={handleInputBlur} type="number" name="resale_price" placeholder="Resale price" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Original price
                                </span>
                            </label>
                            <input onBlur={handleInputBlur} type="number" name="original_price" placeholder="Original price" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Years of use
                                </span>
                            </label>
                            <input onBlur={handleInputBlur} type="number" name="usage" placeholder="Years of use" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Phone number
                                </span>
                            </label>
                            <input onBlur={handleInputBlur} type="number" name="contact" placeholder="017 --------" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                    <div className='form-control'>
                        <button className="btn btn-active btn-secondary">
                            Submit
                        </button>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddProducts;