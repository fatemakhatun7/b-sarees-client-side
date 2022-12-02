import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Advertise from '../Advertise/Advertise';
import Categories from '../Categories/Categories';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import Specialty from '../Specialty/Specialty';

const Home = () => {
    useTitle("Home")
    return (
        <div>
            <Slider></Slider>
            <Advertise></Advertise>
            <Categories></Categories>
            <Specialty></Specialty>
            <Review></Review>
        </div>
    );
};

export default Home;