import React from 'react';
import './SliderItems.css';
import img2 from '../../../assets/images/img-2.jpg';
import img3 from '../../../assets/images/img-3.jpg';
import {FaArrowAltCircleRight} from "react-icons/fa";

const SliderItems = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-16 top-1/4">
                    <h1 className='text-md sm:text-xl md:text-3xl lg:text-3xl font-bold text-white'>
                        The most renowned and Reliable <br />
                        Pre-owned Saree House <br />
                        For girls.<br/>
                        <span className='text-sm font bold'>
                            you can sell and buy used sarees here.
                        </span><br />
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 right-10 sm:right-56 top-3/4">
                    <div className='mr-3'>
                        <img className='w-24 h-32 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer' src={img2} alt="" />
                    </div>
                    <div className='mr-5'>
                        <img className='w-24 h-32 rounded-lg hover:scale-125 transition-all duration-500 cursor-pointer' src={img3} alt="" />
                    </div>
                    <div className='h-10 my-auto  hover:scale-125 cursor-pointer'>
                    <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex" type="button"
                    >
                        <div><p className='font-bold text-white mr-2'>Go</p></div>
                        <div className='mt-1'><FaArrowAltCircleRight></FaArrowAltCircleRight></div>
                    </button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default SliderItems;