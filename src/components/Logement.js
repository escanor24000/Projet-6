import '../styles/Logement.css'
import { useParams } from 'react-router-dom';
import Api from './Api'
import React, { useState } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


     function Logement() {
    const data = Api();
    const idUrl = useParams();
    const loge = []
    data.forEach(function (res) {
        if (idUrl.id === res.id) {
            loge.push(res)
        }

    });
    console.log(loge)

    const Slider = ({ loge }) => {
        const [current, setCurrent] = useState(0);
        const length = loge.pictures.length;

        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        };

        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1 : current - 1);
        };

        return (
            <div className='kasa-containere-slide'>
                <FaChevronLeft className="leftArrow" onClick={prevSlide} />
                <FaChevronRight className="rightArrow" onClick={nextSlide} />
                {loge.pictures.map((loge, index) => {
                    return (
                        <div key={index}>
                            {index === current && <img src={loge.pictures} alt="" />}
                        </div>
                    )
                })}
            </div>
        )
    }

}

export default Logement