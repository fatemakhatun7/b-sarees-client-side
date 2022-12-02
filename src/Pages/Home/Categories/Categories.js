import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [data, setData] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        axios
        .get("https://b-sarees-server.vercel.app/categories")
        .then((response) => setData(response.data))
        .catch((error) => setIsError(error.message));
    }, []);

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Categories</h3>
                <h2 className='text-3xl'>Most popular Categories</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    data.map(cate => <Category
                        key={cate._id}
                        cate={cate}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;