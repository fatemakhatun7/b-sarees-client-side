import React from 'react';
import Review from '../Review/Review';
import Slider from '../Slider/Slider';
import Specialty from '../Specialty/Specialty';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Specialty></Specialty>
            <Review></Review>
        </div>
    );
};

export default Home;