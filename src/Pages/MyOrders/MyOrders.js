import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import MyOrdersCard from './MyOrdersCard';

const MyOrders = () => {
    useTitle("My orders")
    const myOrders = useLoaderData();
    console.log(myOrders);

    return (
        <div>
            <div>
                <h2 className='ml-20 mt-20 mb-5 font-bold text-4xl'>My Orders</h2>
            </div>
            <div className='flex flex-wrap justify-around my-10'>
                {
                    myOrders.map(myOrder => <MyOrdersCard
                    key={myOrder._id}
                    myOrder={myOrder}
                    ></MyOrdersCard> )
                }
            </div>
        </div>
    );
};

export default MyOrders;