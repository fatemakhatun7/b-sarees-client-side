import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/'>Home</Link></li>
                    <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/blogs'>Blogs</Link></li>
                    <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/services'>Categories</Link></li>
                    <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/report'>Report an issue</Link></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center flex">
                <div className="avatar">
                    <div className="w-10 sm:w-16 rounded-full mr-1">
                        <img src="https://i.ibb.co/BLvdhhb/sare.jpg" alt='used sarees'/>
                    </div>
                </div>
                <div>
                    <Link className="font-bold normal-case text-2xl rounded-full"><span className='text-rose-900'>B</span><span className='text-green-900 ml-1'>Sarees</span></Link>
                    <div className='hidden sm:block'>
                        <h2 className='text-xs'>The Pre-owned saree house</h2>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                    <>
                        <button className="dropdown dropdown-end">
                            <button tabIndex={0} className="btn btn-outline btn-success btn-sm">
                                Join Us
                            </button>
                            <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/signin'>Sign In</Link></li>
                                <li className='hover:border-l-4 hover:font-bold border-fuchsia-600'><Link to='/signup'>Sign Up</Link></li>
                            </ul>
                        </button>
                    </>
            </div>
        </div>
    );
};

export default Navbar;