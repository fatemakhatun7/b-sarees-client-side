import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Authprovider';
import Loader from '../Shared/Loader/Loader';

const AddProducts = () => {
    const {user} = useContext(AuthContext);
    const [addProduct, setAddProduct] = useState({});

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data    
        }
    });

    const postTime = new Date().toLocaleTimeString()
    const postDay = new Date().toDateString()
    const date = new Date()
    const postDateInfo ={
        postTime,
        postDay,
        date
    }

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(addProduct);

        const image = addProduct.product_image[0];
        // console.log(image)
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData =>{
            // console.log(imgData.data.url)
            const productInfo = {
                seller_name: addProduct.seller_name,
                cat_name: addProduct.product_name, 
                email: addProduct.email,
                product_image: imgData.data.url,
                location: addProduct.location,
                resale_price: addProduct.resale_price,
                original_price: addProduct.original_price,
                usage: addProduct.usage,
                postDateInfo: postDateInfo,
                contact: addProduct.contact
            }
            
            fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Successfully added your product.');
                e.target.reset();
                navigate('/categories')
            }
        })

        }) 
    }

    if(isLoading){
        return <Loader></Loader>
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
                            <input type="text" name="seller_name" onBlur={(e)=>setAddProduct({...addProduct,seller_name : e.target.value})} placeholder="Your name" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" onBlur={(e)=>setAddProduct({...addProduct,email : e.target.value})} placeholder="Your email" value={user.email} className="input input-bordered input-info max-w-xs mb-2" readOnly/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                 <span className="label-text">Category Name</span>
                            </label>
                            <select name="product_name" onBlur={(e)=>setAddProduct({...addProduct,product_name : e.target.value})} className="select select-info w-full max-w-xs">
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
                            <input type="file" name="product_image" onBlur={(e)=>setAddProduct({...addProduct,product_image : e.target.files})} placeholder="product image"  className="input input-bordered input-info max-w-xs mb-2"/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Location
                                </span>
                            </label>
                            <input type="text" name="location" onBlur={(e)=>setAddProduct({...addProduct,location : e.target.value})} placeholder="location" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Resale price
                                </span>
                            </label>
                            <input type="number" name="resale_price" onBlur={(e)=>setAddProduct({...addProduct,resale_price : e.target.value})} placeholder="Resale price" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Original price
                                </span>
                            </label>
                            <input type="number" name="original_price" onBlur={(e)=>setAddProduct({...addProduct,original_price : e.target.value})} placeholder="Original price" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Years of use
                                </span>
                            </label>
                            <input type="number" name="usage" onBlur={(e)=>setAddProduct({...addProduct,usage : e.target.value})} placeholder="Years of use" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                        <div className='form-control'>
                            <label className="label">
                                <span className="label-text">
                                    Phone number
                                </span>
                            </label>
                            <input type="number" name="contact" onBlur={(e)=>setAddProduct({...addProduct,contact : e.target.value})} placeholder="017 --------" className="input input-bordered input-info max-w-xs mb-2" required/>
                        </div>
                    <div className='form-control'>
                        <Link to='/' className="btn btn-active btn-secondary">
                            Submit
                        </Link>
                    </div>
                    </Form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddProducts;