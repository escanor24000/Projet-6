import React, { useState } from 'react';
import '../../styles/Module_logement/Slide.css'
import vector_G from '../../assets/Vector_G.png'
import vector_D from '../../assets/Vector_D.png'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const btnGauche = document.querySelector('.leftArrow');
    const btnDroite = document.querySelector('.rightArrow');
    
    console.log(length)
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if(length == 1){
        btnGauche.style.display = "hidden";
        btnDroite.style.visibility = "hidden";
    }

    return (
        <>
            <div className='kasa-containere-slide'>
                <img src={vector_G} className="leftArrow" onClick={prevSlide} />
                <img src={vector_D} className="rightArrow" onClick={nextSlide} />
                <p className='conteur-slide'>{current}/{length}</p>
                {slides.map((picture, index) => {
                    return (<div key={index} className="slide-box-photo">
                        {index === current && <img src={picture} alt='yolo' />}
                    </div>)
                })}
            </div>
        </>
    )
}

export default Slider