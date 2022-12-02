import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Contexts/Authprovider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li className='mt-10 font-bold'>{user.displayName}</li>
                        <li className='mb-10 font-bold'>{user.email}</li>

                        {
                            isBuyer && <>
                                <li className='mb-5'><Link className='btn text-white' to={`/dashboard/myOrders/${user.email}`}>My Orders</Link></li>
                                <li className='mb-5'><Link className='btn text-white' to={`/dashboard/wishlists/${user.email}`}>My Wishlists</Link></li>
                            </>
                        }

                        {
                            isAdmin && <>
                                <li className='mb-5'><Link className='btn text-white' to='/dashboard/allusers'>All Users</Link></li>
                                <li className='mb-5'><Link className='btn text-white' to={`/dashboard/allSeller/${user.role="seller"}`}>All sellers</Link></li>
                                <li className='mb-5'><Link className='btn text-white' to={`/dashboard/allBuyer/${user.role="buyer"}`}>All Buyers</Link></li>
                                <li className='mb-5'><Link className='btn text-white'>reported products</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li className='mb-5'><Link to='/dashboard/addProduct' className="btn text-white">Add Product</Link></li>
                                <li className='mb-5'><Link className='btn text-white' to={`/dashboard/myProducts/${user.email}`}>My Products</Link></li>
                                <li className='mb-5'><Link className='btn text-white' to={`/dashboard/wishlists/${user.email}`}>My Wishlists</Link></li>
                                <li className='mb-5'><Link className='btn text-white'>My Buyers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;