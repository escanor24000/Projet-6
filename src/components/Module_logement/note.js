{/*<Localisation localise={loge} />*/}
            {/*<Propriétaire host={loge} />*/}
            {/*<Tags motcle={loge} />*/}
             {/*<Description descrip={loge} />*/}
             {/*<Equipement equip={loge} />*/}

             const [current, setCurrent] = useState(0);
    console.log(slides)
    const images = slides[0].pictures;
    const length = images.length;

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
            {images.map((picture, index) => {
                
               return (<div key={index}>
                { index === current && <img src={picture} alt='yolo' />}
                </div>)   
        })}
        </section>
    )  