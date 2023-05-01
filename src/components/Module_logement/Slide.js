import React, { useState } from 'react';
import '../../styles/Module_logement/Slide.css'
import vector_G from '../../assets/Vector_G.png'
import vector_D from '../../assets/Vector_D.png'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const btnGauche = document.querySelector('.leftArrow');
    const btnDroite = document.querySelector('.rightArrow');
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    
    return (
        <>
            <div className='kasa-containere-slide'>
               {slides.length>1
               ? <img src={vector_G} className="leftArrow" onClick={prevSlide} />: null}
                 {slides.length>1
               ? <img src={vector_D} className="rightArrow" onClick={nextSlide} />: null}
                
                <p className='conteur-slide'>{current+1}/{length}</p>
                {slides.map((picture, index) => {
                    return (<div key={index} className="slide-box-photo">
                        {index === current && <img src={picture} alt='une photo pièce appartement' />}
                    </div>)
                })}
            </div>
        </>
    )
}

export default Slider