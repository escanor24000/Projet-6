import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Api from '../Api';
import { useParams } from 'react-router-dom';


const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    console.log(slides)
    
    return (
        <section className='kasa-containere-slide'>
            <FaChevronLeft className="leftArrow" onClick={prevSlide} />
            <FaChevronRight className="rightArrow" onClick={nextSlide} />
            {slides.map((picture, index) => {
                
               return (<div key={index}>
                { index === current && <img src={picture} alt='yolo' />}
                </div>)   
        })}
        </section>
    )  
}

export default Slider