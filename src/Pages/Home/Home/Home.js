import React from 'react';
import Categories from '../Categories/Categories';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import Specialty from '../Specialty/Specialty';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Specialty></Specialty>
            <Review></Review>
        </div>
    );
};

export default Home;