import React from 'react';
import img1 from '../../../assets/images/img-1.jpg';
import img2 from '../../../assets/images/img-2.jpg';
import img3 from '../../../assets/images/img-3.jpg';
import SliderItems from './SliderItems';

const sliderData = [
    {
        image: img1,
        prev: 6,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        next: 4
    }
]

const Slider = () => {

    return (
        <div className="carousel w-full py-10">
            {
                sliderData.map(slide => <SliderItems
                    key={slide.id}
                    slide={slide}
                ></SliderItems>)
            }
            
        </div>
    );
};

export default Slider;