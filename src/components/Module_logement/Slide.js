import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";



const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <section className='kasa-containere-slide'>
            <FaChevronLeft className="leftArrow" onClick={prevSlide} />
            <FaChevronRight className="rightArrow" onClick={nextSlide} />
            {slides.map((slide, index) => {
             return (
                <div key={index}>
                { index === current && <img src={slide.pictures[0]} alt='yolo' />}
                </div>
        
            )
        })}
        </section>
    )
}

export default Slider